const mongoose = require('mongoose');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.AddBooking = catchAsync(async (req, res, next) => {
  const newBooking = await Booking.create({
    user: req.body.user,
    tour: req.body.tour,
    amount: req.body.amount
  });
  res.status(201).json({
    status: 'success',
    data: {
      booking: newBooking
    }
  });
});
exports.getBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findById(
    mongoose.Types.ObjectId(req.params.id)
  );
  if (!booking) {
    return next(new AppError(404, 'No Booking found with that id'));
  }
  res.status(200).json({
    status: 'success',
    data: {
      booking
    }
  });
});
exports.getAllBookings = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find();
  res.status(200).json({
    status: 'success',
    results: bookings.length,
    data: {
      bookings
    }
  });
});
exports.deleteBooking = catchAsync(async (req, res, next) => {
  await Booking.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id));
  res.status(204).json({
    status: 'success'
  });
});
