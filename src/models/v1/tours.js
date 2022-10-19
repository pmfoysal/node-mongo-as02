const mongoose = require('mongoose');
const valid = require('validator').default;

const toursSchema = mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         required: [true, 'Please provide a tour name'],
         unique: [true, 'Tour name must be unique'],
         minLength: [3, 'Tour name must be at least 3 characters long'],
         maxLength: [100, 'Tour name must be maximum 100 characters long'],
      },
      description: {
         type: String,
         trim: true,
         required: true,
      },
      imageUrls: [
         {
            type: String,
            required: true,
            validate: {
               validator: valid.isURL,
               message: 'Tour image urls must be a valid url',
            },
         },
      ],
      views: {
         type: Number,
         default: 0,
      },
      price: {
         type: Number,
         required: true,
         min: [0, 'Tour Price must be greater than 0'],
      },
      status: {
         type: String,
         required: true,
         enum: {
            values: ['available', 'unavailable'],
            message: '{VALUE} is not supported for tour status',
         },
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('tours', toursSchema);
