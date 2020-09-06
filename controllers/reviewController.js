const mongoose = require('mongoose');
const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.setUserAndTour = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  req.body.user = req.user.id;
  next();
};
exports.getAllReviews = catchAsync(async (req, res, next) => {
  let reviews;
  if (req.params.tourId) {
    reviews = await Review.find({ tour: req.params.tourId });
  } else {
    reviews = await Review.find();
  }
  if (!reviews) {
    return next(new AppError(404, 'No Reviews found for this tour'));
  }
  res.json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews
    }
  });
});
exports.getReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(mongoose.Types.ObjectId(req.params.id));
  if (!review) {
    return next(new AppError(404, 'No Reviews found for this tour'));
  }
  res.json({
    status: 'success',
    data: {
      review
    }
  });
});
exports.addReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      review: newReview
    }
  });
});
