const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'A review must have a user']
  },
  tour: {
    type: mongoose.Types.ObjectId,
    ref: 'Tour',
    required: [true, 'A review must be for a tour']
  }
});
reviewSchema.index(
  {
    user: 1,
    tour: 1
  },
  {
    unique: true
  }
);
reviewSchema.statics.calcAverageRating = async function(tourId) {
  const results = await this.aggregate([
    { $match: { tour: tourId } },
    {
      $group: {
        _id: '$tour',
        noOfRatings: {
          $sum: 1
        },
        avgRating: {
          $avg: '$rating'
        }
      }
    }
  ]);
  if (results.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: results[0].noOfRatings,
      averageRating: results[0].avgRating
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      averageRating: 4.5
    });
  }
};
reviewSchema.post('save', function() {
  this.constructor.calcAverageRating(this.tour);
});
reviewSchema.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  next();
});
reviewSchema.post(/^findOneAnd/, async function() {
  await this.r.constructor.calcAverageRating(this.r.tour);
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
