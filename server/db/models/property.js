const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  customer_name: String,
  address: String,
  email: String,
  permalink: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

const Property = mongoose.model('Property', PropertySchema);