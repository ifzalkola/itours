const mongoose = require('mongoose');
const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFields) => {
  const filteredObject = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) filteredObject[el] = obj[el];
  });
  return filteredObject;
};
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.json({
    message: 'success',
    data: {
      user: newUser
    }
  });
});
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    return cb(new AppError(400, 'Please upload image only'));
  }
};
const upload = multer({
  storage,
  fileFilter
});
exports.uploadPhoto = upload.single('photo');
exports.resizePhoto = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next();
  }
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  sharp(req.file.buffer)
    .resize(500, 500, {
      fit: 'cover'
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/images/users/${req.file.filename}`);
  next();
});
exports.updateUser = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        400,
        'This route is not for updating password,Please use the appropriate route'
      )
    );
  }
  const filteredObject = filterObj(req.body, 'fullName', 'email');
  if (req.file) filteredObject.photo = req.file.filename;
  console.log(filteredObject);
  const updatedUser = await User.findOneAndUpdate(
    { email: req.user.email },
    filteredObject,
    {
      runValidators: true,
      new: true
    }
  );
  res.json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});
exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(
    mongoose.Types.ObjectId(req.params.id)
  ).populate('bookings');
  if (!user) {
    return next(new AppError(400, 'There is no user with provided Id'));
  }
  res.json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users) {
    return next(new AppError(400, 'There are no users registered'));
  }
  res.json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});
