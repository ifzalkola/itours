const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      minlength: [10, 'Please enter your Full name'],
      required: true
    },
    userName: {
      type: String,
      minlength: [6, 'Username should contain atleast six letters'],
      required: true
    },
    photo: String,
    email: {
      type: String,
      validate: validate({
        validator: 'isEmail',
        message: 'Please Enter a valid Email address'
      }),
      required: true,
      unique: true
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'guide', 'lead-guide'],
      default: 'user'
    },
    password: {
      type: String,
      minlength: [8, 'Length of password should be atleast 8'],
      required: true,
      select: false
    },
    passwordConfirm: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function(password) {
          return password === this.password;
        },
        message: () => `password doesnot match`
      }
    },
    passwordChangedAt: {
      type: Date,
      default: Date.now,
      select: false
    },
    resetToken: {
      type: String,
      select: false
    },
    resetTokenExpires: {
      type: Date,
      select: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: {
      virtuals: true
    }
  }
);
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const encryptedPassword = await bcrypt.hash(this.password, 10);
  this.password = encryptedPassword;
  this.passwordConfirm = null;
  next();
});
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) {
    return next();
  }
  this.passwordChangedAt = Date.now();
  next();
});
userSchema.virtual('bookings', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'user'
});
userSchema.methods.sendPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.resetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.resetTokenExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
userSchema.methods.passwordChangedAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimeStamp;
  }
  return false;
};
userSchema.methods.comparePassword = async function(
  normalPassword,
  encryptedPassword
) {
  return await bcrypt.compare(normalPassword, encryptedPassword);
};

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
