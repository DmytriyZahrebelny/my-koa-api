const mongoose = require('../libs/mongoose');

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  type: {
    type: String,
    required: 'Type is required',
  },
  descriptions: {
    type: String,
    required: 'descriptions is required',
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
