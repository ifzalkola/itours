const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/bookings', bookingRouter);
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'This Route is not yet defined'
  });
});
app.use(globalErrorHandler);

module.exports = app;
