const Item = require('../models/Item');

module.exports = {
  createCustomer: function(req, res) {
    Customer.create({
      name: req.body.name,
      status: req.body.status,
      property: req.body.property,
      permalink: req.permalink,
      items: []
    })
  }
}