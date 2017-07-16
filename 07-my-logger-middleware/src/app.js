const express = require('express');

const app = express();

// middleware logging timestamp before handling requests

// handle '/' get requests with 'hello world'
// and pass control to the next middleware

// middleware logging timestamp after handling requests

app.listen(3000, () => {
  console.log('App running on port 3000');
});
