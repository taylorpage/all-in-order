const adminController = require('../db/controllers/adminController');

module.exports = (app, express) => {

  app.get('/admin/all', (req, res) => {
    adminController.getAll((data) => {
      res.status(200).send(data)
    })
  })

  app.post('/admin/create', (req, res) => {
    adminController.create(req, data => {
      res.status(200).send(data);
    })
  })

  app.post('/admin/signin', (req, res) => {
    adminController.signin(req, data => {
      res.status(200).send(data);
    })
  })
}