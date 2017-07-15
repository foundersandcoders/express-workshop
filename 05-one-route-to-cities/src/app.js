const express = require('express');

const app = express();

app.get('/:city', (req, res) => {
  const city = req.params.city; // or: const { city } = req.params;
  res.send('Hello ' + city[0].toUpperCase() + city.slice(1));
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
