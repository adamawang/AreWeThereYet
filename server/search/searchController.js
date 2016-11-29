
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBRloXxOKYx6DXkEcmUc3pDbj4I9SobLiA'
});

module.exports = {

  newQuery: function (req, res) {
    // console.log("Running??", req.body.destination);
    googleMapsClient.distanceMatrix({
      origins: 'Mountain View, CA',
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
