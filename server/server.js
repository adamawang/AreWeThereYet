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

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));

module.exports = app;
