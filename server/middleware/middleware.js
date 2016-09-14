const morgan = require('morgan');
const bodyParser = require('body-parser');

//Use middleware
module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};