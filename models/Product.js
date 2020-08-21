const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  v: {
    type: Boolean,
    required: true,
  },
  g: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = Product = mongoose.model('product', ProductSchema);
