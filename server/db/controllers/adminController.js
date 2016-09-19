const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

function encryptPassword(text) {
  let salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(text, salt);
}

module.exports = {

  //Create a new admin account

  create: (req, callback) => {
    Admin.create({
      name: req.body.name,
      email: req.body.email,
      password: encryptPassword(req.body.password)
    }, (err, data) => {
      callback(data);
    });
  },

  //Get all admin accounts

  getAll: (callback) => {
    Admin.find({}, (err, admins) => {
      callback(admins);
    })
  },

  //Currently checks to see if the password matches

  signin: (req, callback) => {
    let conditions = { email: req.body.email }
    Admin.findOne(conditions, (err, admin) => {
      let checkPassword = bcrypt.compareSync(req.body.password, admin.password);
      callback(checkPassword);
    });
  }
}