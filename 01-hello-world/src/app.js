const express = require('express');

// create express app
const app = express();

// route handler
app.get('/', (req, res) => {
  res.send('Hello world');
});

// listen for connections
app.listen(3000, () => {
  console.log('App running on port 3000');
});
