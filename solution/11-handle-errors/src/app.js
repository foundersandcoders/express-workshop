const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const app = express();

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fruit', (req, res) => {
  // call an undefined function in this handler to cause an error

  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

app.post('/fruit', (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
});

// create a 404 middleware sending the '404.html' file

// create a 500 middleware sending the '500.html' file

app.listen(3000, () => {
  console.log('App running on port 3000');
});
