const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phoneNumber: Number,
  email: String,
  items: [
    {
      productId: String,
      product: String,
      qty: Number,
    },
  ],
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  town: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  orderTotal: {
    type: Number,
    required: true,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
