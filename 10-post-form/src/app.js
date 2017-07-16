const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
// import 'body-parser' module

const app = express();

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

// parse incoming json

// parse urlencoded bodies

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

// create a post '/fruit' handler and log 'name' and 'image_url'
// redirect to '/fruit'

app.listen(3000, () => {
  console.log('App running on port 3000');
});
