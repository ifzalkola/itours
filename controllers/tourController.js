/* eslint-disable node/no-unsupported-features/es-syntax */
const sharp = require('sharp');
const multer = require('multer');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/APIFeatures');

exports.getAllTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find().populate('reviews'), req.query)
    .filter()
    .sort()
    .paginate();
  const tours = await features.query;
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});
exports.addTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
});
exports.deleteTour = catchAsync(async (req, res, next) => {
  await Tour.findOneAndDelete({ slug: req.params.slug });
  res.status(204).json({
    status: 'success'
  });
});
exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await (await Tour.findOne({ slug: req.params.slug })).populate(
    'reviews'
  );
  if (!tour) {
    return next(new AppError(404, 'No tour found with this slug'));
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError(400, 'Please upload image only'));
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});
exports.uploadPhotos = upload.fields([
  {
    name: 'coverPhoto',
    maxCount: 1
  },
  {
    name: 'photos',
    maxCount: 6
  }
]);
exports.resizePhotos = async (req, res, next) => {
  if (!req.files.coverPhoto || !req.files.photos) {
    return next();
  }
  req.body.coverPhoto = `tour-${req.params.slug}-cover.jpeg`;
  await sharp(req.files.coverPhoto[0].buffer)
    .resize(800, 533)
    .toFormat('jpeg')
    .jpeg({
      quality: 90
    })
    .toFile(`public/images/tours/${req.body.coverPhoto}`);
  req.body.photos = [];
  await Promise.all(
    req.files.photos.map(async (photo, index) => {
      const filename = `tour-${req.params.slug}-${Date.now()}-${index +
        1}.jpeg`;
      await sharp(photo.buffer)
        .resize(800, 533)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/images/tours/${filename}`);
      req.body.photos.push(filename);
    })
  );
  next();
};
exports.updateTour = catchAsync(async (req, res, next) => {
  const updatedTour = await Tour.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  if (!updatedTour) {
    return next(new AppError(404, 'No tour found with this slug'));
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: updatedTour
    }
  });
});
