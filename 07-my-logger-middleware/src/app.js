const express = require('express');

const app = express();

// middleware logging timestamp before handling requests
app.use((req, res, next) => {
  console.log(Date.now(), 'before');
  next();
});

// handle '/' get requests with 'hello world'
// and pass control to the next middleware
app.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

// middleware logging timestamp after handling requests
app.use((req, res) => {
  console.log(Date.now(), 'after');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
