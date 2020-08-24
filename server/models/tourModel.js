const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
      minlength: [10, 'Tour name should be atleast 10 letters long']
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    },
    coverPhoto: {
      type: String,
      required: [true, 'A tour must have a cover Photo']
    },
    photos: [String],
    slug: String,
    locations: [
      {
        locationName: String,
        locationDescription: String,
        locationPoint: {
          type: {
            type: String,
            enum: ['Point'],
            required: [true, 'A tour must a start point']
          },
          coordinates: {
            type: [Number],
            required: true
          }
        }
      }
    ],
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']
    },
    tourDescription: {
      type: String,
      required: [true, 'A tour must have a description'],
      minlength: [50, 'A tour description must be 50 characters long']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    averageRating: {
      type: Number,
      default: 4.5
    },
    ratingsQuantity: {
      type: Number
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id'
});
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, {
    lower: true
  });
  next();
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
