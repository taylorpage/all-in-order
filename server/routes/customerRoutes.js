const customerController = require('../db/controllers/customerController');


module.exports = (app, express) => {

  //Creates a new customer

  app.post('/customer/create', (req, res) => {
    customerController.create(req, data => {
      res.status(200).send(data);
    });
  })

  //Gets all customers and related information

  app.get('/customer/all', (req, res) => {
    customerController.getAll(data => {
      res.status(200).send(data);
    })
  });

  //Gets all items from a specific customer based on the permalink provided

  app.post('/customer/items', (req, res) => {
    customerController.getItems(req, data => {
      res.status(200).send(data.items);
    })
  })

  //Adds an item to a specific customers list based on the permalink provided

  app.post('/customer/add/item', (req, res) => {
    customerController.getItems(req, data => {
      customerController.addItem(req, data, (newData) => {
        res.status(200).send(newData);
      })
    })
  })

  //Changes the status of a specific item based on item name provided for a specific customer based on the permalink provided

  app.post('/customer/status', (req, res) => {
    customerController.getItems(req, data => {
      customerController.changeStatus(req, data, (newData) => {
        res.status(200).send(newData);
      });
    })
  })
};