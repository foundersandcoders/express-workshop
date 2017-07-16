const express = require('express');

const app = express();

// send html markup
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1><p>Cool</p>');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
