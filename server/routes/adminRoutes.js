const adminController = require('../db/controllers/adminController');

module.exports = (app, express) => {
  app.get('/admin', (req, res) => {
    console.log('admin');
    res.end();
  })

  app.post('/admin/signin', (req, res) => {
    adminController.signin(req, data => {
      res.status(200).send(data);
    })
  })
}