const Customer = require('../models/customer');

module.exports = {
  createCustomer: (name, status, property, callback) => {
    Customer.create({
      name: name,
      status: status,
      property: property,
      permalink: 'perma.link',
      items: []
    }, (err, data) => {
      callback(data);
    })
  },
  getAll: (callback) => {
    Customer.find({}, (err, data) => {
      callback(data);
    })
  }
}