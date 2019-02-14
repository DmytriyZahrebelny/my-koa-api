const mongoose = require('../libs/mongoose');

const productsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: 'Title is required',
  },
  type: {
    type: String,
    required: 'Type is required',
  },
  description: {
    type: String,
    required: 'description is required',
  },
  image: {
    type: String,
    required: 'Image is required',
  },
  price: {
    type: String,
    required: 'price is required',
  },
}, {
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model('Products', productsSchema);
