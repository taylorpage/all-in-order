const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  property: String,
  permalink: String,
  items: Array,
  updated_at: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;