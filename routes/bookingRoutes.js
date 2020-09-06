const express = require('express');
const { protect } = require('../controllers/authController');
const {
  getAllBookings,
  AddBooking,
  getBooking,
  deleteBooking
} = require('../controllers/bookingController');
const { setUserAndTour } = require('../controllers/reviewController');

const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(getAllBookings)
  .post(setUserAndTour, AddBooking);
router
  .route('/:id')
  .get(getBooking)
  .delete(deleteBooking);
module.exports = router;
