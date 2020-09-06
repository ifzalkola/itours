const express = require('express');
const reviewController = require('../controllers/reviewController');
const { protect } = require('../controllers/authController');

const router = express.Router({
  mergeParams: true
});

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(protect, reviewController.setUserAndTour, reviewController.addReview);
router.route('/:id').get(reviewController.getReview);
module.exports = router;
