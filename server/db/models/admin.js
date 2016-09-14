const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: String,
  status: String,
  description: String,
  email: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
});

const Item = mongoose.model('Admin', AdminSchema);