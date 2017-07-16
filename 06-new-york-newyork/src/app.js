const express = require('express');

const app = express();

// serve Hello New York on the /new-york, /newyork paths
app.get('/new-?york', (req, res) => {
  res.send('Hello New York');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
