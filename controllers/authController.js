const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { promisify } = require('util');
const crypto = require('crypto');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const Email = require('../utils/Email');

const generateToken = id => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
  return token;
};
const sendToken = (user, res, statusCode) => {
  const token = generateToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    httpOnly: true
  };
  res.cookie('jwt', token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};
exports.isLoggedIn = catchAsync(async (req, res, next) => {
  if (!req.cookies.jwt) {
    return next(new AppError(401, 'No jwt'));
  }
  const token = req.cookies.jwt;
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const user = await User.findById(mongoose.Types.ObjectId(decoded.id));
  if (!user || user.passwordChangedAfter(decoded.iat)) {
    return res.json({
      isLoggedIn: false
    });
  }
  res.json({
    isLoggedIn: true,
    user
  });
});
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else {
    token = req.cookies.jwt;
  }
  if (!token)
    return next(new AppError(401, 'Please login to access this route'));
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(mongoose.Types.ObjectId(decoded.id));
  if (!user) {
    return next(
      new AppError(404, 'The user to which the token belongs doesnot exist')
    );
  }
  if (user.passwordChangedAfter(decoded.iat)) {
    return next(
      new AppError(
        401,
        'User has recently changed the password,please login again'
      )
    );
  }
  req.user = user;
  next();
});
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(401, 'You are not allowed to perform this action')
      );
    }
    next();
  };
};
exports.signUp = catchAsync(async (req, res, next) => {
  const { fullName, email, password, passwordConfirm } = req.body;
  const newUser = await User.create({
    fullName,
    email,
    password,
    passwordConfirm
  });
  sendToken(newUser, res, 201);
});
exports.signin = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email }).select(
    '+password'
  );
  if (!user) {
    return next(new AppError(404, 'No user found with this email'));
  }
  const { password } = req.body;
  const correct = await user.comparePassword(password, user.password);
  if (!correct) {
    return next(new AppError(401, 'Invalid Password'));
  }
  sendToken(user, res, 200);
});
exports.signOut = catchAsync(async (req, res, next) => {
  res.cookie('jwt', 'jwt', {
    expires: new Date(Date.now() + 1000)
  });
  res.json({
    status: 'success',
    message: 'Signed Out Successfully'
  });
});
exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return next(new AppError(404, 'No User found with this email'));
  }
  const resetToken = user.sendPasswordResetToken();
  await user.save({
    validateBeforeSave: false
  });
  try {
    await new Email(email).sendResetTokenEmail(resetToken);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err
    });
  }
  res.json({
    status: 'success',
    message: 'Reset Token sent to your email'
  });
});
exports.resetPassword = catchAsync(async (req, res, next) => {
  const resetToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');
  const user = await User.findOne({
    resetToken: resetToken,
    resetTokenExpires: { $gt: Date.now() }
  });
  if (!user) {
    return next(new AppError(400, 'Invalid Token or token expired'));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.resetToken = null;
  user.resetTokenExpires = null;
  await user.save();
  sendToken(user, res, 200);
});
exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.user.email }).select(
    '+password'
  );
  const { password, passwordConfirm, currentPassword } = req.body;
  const correct = user.comparePassword(currentPassword, user.password);
  if (!correct) {
    return next(new AppError(400, 'Password doesnot match'));
  }
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save();
  sendToken(user, res, 200);
});
