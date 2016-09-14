const customerController = require('../db/controllers/customerController');


module.exports = (app, express) => {

  //Main route
  app.get('/', (req, res) => {
    customerController.print();
    res.end();
  })

  app.get('/customer/all', (req, res) => {
    customerController.getAll(data => {
      res.status(200).send(data);
    })
  });

  app.post('/customer/create', (req, res) => {
    let name = req.body.name;
    let status = req.body.status;
    let property = req.body.property;

    customerController.createCustomer(name, status, property, data => {
      res.status(200).send(data);
    });
  })
};