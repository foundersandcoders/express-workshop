const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');

const controllers = require('./controllers/index');

// create express app
const app = express();

// express config
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);
app.use(controllers);

// export the app
module.exports = app;
