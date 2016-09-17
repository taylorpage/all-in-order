const Admin = require('../models/admin');

module.exports = {
  create: (name, email, password, callback) => {
    Admin.create({
      name: name,
      email: email,
      password: password,
    }, (err, data) => {
      callback(data);
    });
  },

  signin: (conditions, callback) => {
    console.log(conditions.body)
    // Admin.findOne(req, (err, admin) => {
    //   callback(admin);
    // })
  }
}