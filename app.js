const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
if (process.env.NODE_ENV === 'development') app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'client/public')));
}

app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/bookings', bookingRouter);
app.post('/get-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'inr',
      metadata: { integration_check: 'accept_a_payment' }
    });
    res.json({
      client_secret: paymentIntent.client_secret
    });
  } catch (err) {
    console.log(err);
  }
});
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'This Route is not yet defined'
  });
});
app.use(globalErrorHandler);

module.exports = app;
