const express = require('express');
// import 'morgan' middleware
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// create a write stream in append mode
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '..', 'logs-demo', 'access.log'),
  { flags: 'a' }
);

// setup morgan logger in 'combined' and stream data to the write stream
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Hello Dexter');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
