const express = require('express');
const mongoose = require('mongoose');
const middleware = require('./middleware/middleware')
const routes = require('./routes/routes')

const app = express();

//Connect middleware
middleware(app, express);

//Connect routes
routes(app, express);

//Connect database
const mongouri = process.env.MONGODB_URI || 'mongodb://localhost/marvin';

mongoose.connect(mongouri).then(() => {
  console.log('Database connected')
});

//Run server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})