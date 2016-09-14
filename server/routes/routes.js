const customerController = require('../db/controllers/customerController');


module.exports = (app, express) => {

  //Main route
  app.get('/', (req, res) => {
    console.log('Main');
    res.end();
  })

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
      let updates = { items: data[0].items.concat(req.body.item) };

      customerController.addItems(conditions, updates, (data) => {
        res.status(200).send(data);
      })
    })
  })

  app.post('/customer/create', (req, res) => {
    let name = req.body.name;
    let status = req.body.status;
    let property = req.body.property;

    customerController.create(name, status, property, data => {
      res.status(200).send(data);
    });
  })
};