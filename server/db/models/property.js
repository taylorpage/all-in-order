const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  customer_name: String,
  address: String,
  items: Array,
  email: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

const Property = mongoose.model('Property', PropertySchema);