const express = require('express');
const authController = require('../controllers/authController');
const tourController = require('../controllers/tourController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    tourController.addTour
  );
router.route('/:id').get(tourController.getTour);
router.use(authController.protect, authController.restrictTo('admin'));
router
  .route('/:id')
  .patch(
    tourController.uploadPhotos,
    tourController.resizePhotos,
    tourController.updateTour
  )
  .delete(tourController.deleteTour);
router.use('/:tour-Id/reviews', reviewRouter);
module.exports = router;
