const Customer = require('../models/customer');

module.exports = {
  create: (name, status, property, callback) => {
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
    Customer.find({}, (err, customers) => {
      callback(customers);
    })
  },

  addItems: (conditions, item, callback) => {
    Customer.update(conditions, item, (err, customer) => {
      callback(customer);
    })
  },

  getItems: (conditions, callback) => {
    Customer.find(conditions, (err, customer) => {
      callback(customer);
    })
  }
}