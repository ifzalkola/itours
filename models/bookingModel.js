const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  tour: {
    type: mongoose.Types.ObjectId,
    ref: 'Tour',
    required: [true, 'A booking must belong to a tour']
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'A booking must belong to a user']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: [true, 'A booking must have an amount']
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
