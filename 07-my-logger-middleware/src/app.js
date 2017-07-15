const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(Date.now(), 'before');
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello world');
  next();
});

app.use((req, res) => {
  console.log(Date.now(), 'after');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
