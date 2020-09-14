const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .post(authController.signUp)
  .get(authController.protect, userController.getAllUsers)
  .patch(
    authController.protect,
    userController.uploadPhoto,
    userController.resizePhoto,
    userController.updateUser
  );
router.route('/isLoggedIn').post(authController.isLoggedIn);
router.route('/:id').get(userController.getUser);

router.route('/signin').post(authController.signin);
router.route('/signout').post(authController.signOut);
router
  .route('/update-password')
  .patch(authController.protect, authController.updatePassword);
router.patch('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:resetToken', authController.resetPassword);
module.exports = router;
