var express = require('express');
var app = express();
var path = require('path');
var searchController = require('./search/searchController.js');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.post('/search', searchController.newQuery);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(8000);

module.exports = app;
