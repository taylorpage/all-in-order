const Customer = require('../models/customer');
const sendmail = require('sendmail');

function permalinkMaker(email) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz@.-'
  let code = '';
  email.split('').forEach(char => {
    code += alpha.indexOf(char).toString();
  })
  return `http://allinone.com/customer/${code}`
}

module.exports = {
  create: (req, callback) => {
    Customer.create({
      name: req.body.name,
      email: req.body.email,
      property: req.body.property,
      permalink: permalinkMaker(req.body.email),
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

  forwardLink: (req, callback) => {
    let conditions = { permalink: req.body.permalink }
    let recipient = req.body.to;

    Customer.find(conditions, (err, customer) => {
      console.log(customer);
      sendmail({
        from: customer.email,
        to: recipient,
        subject: 'Check Out My Stuff!',
        html: `Hello, I am forwarding you a link so you can check out some stuff I have for sale. Click Here: ${customer.permalink}`,
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
      });
    })
  }
}