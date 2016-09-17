const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin