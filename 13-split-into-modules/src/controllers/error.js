// handle client and server errors
const path = require('path');

exports.client = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

exports.server = (err, req, res, next) => {
  console.log(err.message);
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};
