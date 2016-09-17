const Customer = require('../models/customer');

module.exports = {
  create: (req, callback) => {
    Customer.create({
      name: req.body.name,
      email: req.body.email,
      property: req.body.property,
      permalink: req.body.permalink,
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

  addItem: (req, data, callback) => {

    let updates = { items: data.items.concat(req.body.item) };
    let conditions = { permalink: req.body.permalink };

    Customer.update(conditions, { $set: updates }, (err, customer) => {
      callback(customer);
    })
  },

  changeStatus: (req, data, callback) => {
    let match = req.body.item.name;
    let status = req.body.item.status;
    let items = data.items.map(item => {
      return item.name === match ? { name: item.name, status: status } : item;
    });
    let updates = { items: items };
    let conditions = { permalink: req.body.permalink };

    Customer.update(conditions, { $set: updates }, (err, customer) => {
      callback(customer);
    })
  },

  getItems: (req, callback) => {
    let conditions = { permalink: req.body.permalink };

    Customer.findOne(conditions, (err, customer) => {
      callback(customer);
    })
  },
}