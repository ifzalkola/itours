const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stripe = require('stripe')(
  'sk_test_51Gu2DXAeW4SghGpCcHPgkrrBeAoyQPrPhB98elZPdGNHXzSrotHCMrARQDMYu9AQhmqEalZ0UmH2ihYmvj26z2OS00u2GV8In3'
);

const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/public')));

app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/bookings', bookingRouter);
app.post('/create-checkout-session', async (req, res) => {
  try {
    const redirectUrl = req.header('referer');
    const { tourName, amount, email, photo } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `Tour: ${tourName}`,
              images: [`${redirectUrl}/images/tours/${photo}`]
            },
            unit_amount: amount * 100
          },
          quantity: 1
        }
      ],
      customer_email: email,
      mode: 'payment',
      success_url: redirectUrl,
      cancel_url: redirectUrl
    });
    res.json({
      id: session.id
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
