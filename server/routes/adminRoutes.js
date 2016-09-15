const adminController = require('../db/controllers/adminController');

module.exports = (app, express) => {
  app.get('/admin', (req, res) => {
    console.log('admin');
    res.end();
  })
}