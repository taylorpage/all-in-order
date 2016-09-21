const adminController = require('../db/controllers/adminController');

module.exports = (app, express) => {

  app.post('/admin/test', (req, res) => {
    adminController.test(req, data => {
      res.send(data)
    })
  })

  //Get all admin data

  app.get('/admin/all', (req, res) => {
    adminController.getAll((data) => {
      res.status(200).send(data)
    });
  });

  //Create a new admin account

  app.post('/admin/create', (req, res) => {
    adminController.create(req, data => {
      res.status(200).send(data);
    });
  });

  //Sign in with an already created admin account

  app.post('/admin/signin', (req, res) => {
    adminController.signin(req, data => {
      let status = data ? 'Logged In' : 'Incorrect Password';
      console.log(status);
      res.status(200).send(data);
    });
  });
}