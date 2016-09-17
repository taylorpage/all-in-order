const Customer = require('../models/customer');

module.exports = {
  create: (name, status, property, permalink, callback) => {
    Customer.create({
      name: name,
      status: status,
      property: property,
      permalink: permalink,
      items: []
    }, (err, data) => {
      callback(data);
    })
  },

  getAll: (callback) => {
    Customer.find({}, (err, customers) => {
      callback(customers);
    })
  },

  update: (conditions, update, callback) => {
    Customer.update(conditions, update, (err, customer) => {
      callback(customer);
    })
  },

  getItems: (conditions, callback) => {
    Customer.findOne(conditions, (err, customer) => {
      callback(customer);
    })
  },
}