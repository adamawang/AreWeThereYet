var searchController = require('../search/searchController.js');

module.exports = function (app, express) {
  
  app.post('/search', searchController.newQuery);
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });


};
