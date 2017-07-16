const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

app.listen(3000, () => {
  console.log('App running on port');
});
