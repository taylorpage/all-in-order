const Admin = require('../models/admin');

module.exports = {
  create: (req, callback) => {
    Admin.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, (err, data) => {
      callback(data);
    });
  },

  getAll: (callback) => {
    Admin.find({}, (err, admins) => {
      callback(admins);
    })
  },

  signin: (req, callback) => {
    let conditions = { email: req.body.email }
    Admin.findOne(conditions, (err, admin) => {
      callback(admin.password === req.body.password);
    });
  }
}