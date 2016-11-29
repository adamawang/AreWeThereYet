
var key = process.env.key || require('../config/maps.js');
var googleMapsClient = require('@google/maps').createClient({
  key: key
});

module.exports = {

  newQuery: function (req, res) {
    // console.log("Running??", req.body.destination);
    googleMapsClient.distanceMatrix({
      origins: '1216 Broadway, New York, NY',
      destinations: req.body.destination,
      units: 'imperial',
      mode: 'driving'
    }, function(err, response) {
      if (!err) {
        res.json(response.json.rows[0].elements);
      }
    });
  }
};
