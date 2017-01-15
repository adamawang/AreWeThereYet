var express = require('express');
var app = express();
var path = require('path');
var searchController = require('./search/searchController.js');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

app.post('/search', searchController.newQuery);

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.use(express.static(path.join(__dirname, '/../client')));

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log('Error occurred : ', err);
  } else {
    console.log('Server is listening to port : ', port);
  }
});

module.exports = app;
