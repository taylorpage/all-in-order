const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  status: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

const Item = mongoose.model('Item', ItemSchema);