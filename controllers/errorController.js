/* eslint-disable node/no-unsupported-features/es-syntax */
const AppError = require('../utils/appError');

const handleDBDuplicateId = err => {
  return new AppError(
    400,
    `Duplicate Entry: ${Object.keys(err.keyValue)
      .map(key => err.keyValue[key])
      .join('')}`
  );
};
const handleErrorProd = (res, err) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    res.status(500).json({
      status: 'fail',
      message: 'something went very very wrong'
    });
  }
};
const handleErrorDev = (res, err) => {
  res.status(400).json({
    errStack: err.stack,
    err
  });
};
module.exports = (err, req, res, next) => {
  console.log(err);
  let error;
  error = { ...err };
  error.message = err.message;
  error.stack = err.stack;
  if (process.env.NODE_ENV === 'development') {
    handleErrorDev(res, error);
  } else {
    if (error.code === 11000) error = handleDBDuplicateId(err);
    handleErrorProd(res, error);
  }
};
