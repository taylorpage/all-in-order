const customerController = require('../db/controllers/customerController');


module.exports = (app, express) => {

  app.get('/customer/all', (req, res) => {
    customerController.getAll(data => {
      res.status(200).send(data);
    })
  });

  app.post('/customer/items', (req, res) => {
    let conditions = { permalink: req.body.permalink };

    customerController.getItems(conditions, data => {
      res.status(200).send(data[0].items);
    })
  })

  app.post('/customer/update', (req, res) => {
    let conditions = { permalink: req.body.permalink };

    customerController.getItems(conditions, data => {
      let updates = { items: data.items.concat(req.body.item) };
      customerController.update(conditions, { $set: updates }, (data) => {
        res.status(200).send(data);
      })
    })
  })

  app.post('/customer/status', (req, res) => {
    let match = req.body.item.name;
    let status = req.body.item.status;
    let conditions = { permalink: req.body.permalink };

    customerController.getItems(conditions, data => {
      let items = data.items.map(item => {
        return item.name === match ? { name: item.name, status: status } : item;
      });

      let updates = { items: items };

      customerController.update(conditions, updates, (data) => {
        res.status(200).send(data);
      });
    })
  })

  app.post('/customer/create', (req, res) => {
    let name = req.body.name;
    let status = req.body.status;
    let property = req.body.property;
    let permalink = req.body.permalink;

    customerController.create(name, status, property, permalink, data => {
      res.status(200).send(data);
    });
  })
};