const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const app = express();

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

app.post('/fruit', (req, res) => {
  console.log(req.body);
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
});

app.listen(3000, () => {
  console.log('App running on port');
});
