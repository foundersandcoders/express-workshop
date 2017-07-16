const express = require('express');
// import 'morgan' middleware

const fs = require('fs');
const path = require('path');

const app = express();

// create a write stream in append mode

// setup morgan logger in 'combined' and stream data to the write stream

app.get('/', (req, res) => {
  res.send('Hello Dexter');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
