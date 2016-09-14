module.exports = function (app, express) {

  //Main route
  app.get('/', function(req, res) {
    console.log('Main');
    res.end();
  })
};