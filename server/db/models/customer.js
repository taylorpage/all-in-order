const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  status: String,
  properties: Array,
  permalink: String,
  updated_at: { type: Date, default: Date.now },
});

const Item = mongoose.model('Customer', CustomerSchema);