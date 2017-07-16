const express = require('express');

const app = express();

// create 3 handlers for 3 paths
app.get('/london', (req, res) => {
  res.send('Hello London');
});

app.get('/nazareth', (req, res) => {
  res.send('Hello Nazareth');
});

app.get('/gaza', (req, res) => {
  res.send('Hello Gaza');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
