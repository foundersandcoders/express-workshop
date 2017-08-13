// handle '/fruit' get and post requests
const path = require('path');

exports.get = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'fruit.html'));
};

exports.post = (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
};
