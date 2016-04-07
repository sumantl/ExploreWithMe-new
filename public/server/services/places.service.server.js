module.exports = function(app){

    var request = require('request');


    app.get('/api/places/search', searchPlaces);
   // app.get('/api/yelp/search/:business', searchBusiness);


    function searchPlaces(req, res){

        var searchQuery = req.query.search;
        var location;
        var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+searchQuery+'&location='+location+'&key=AIzaSyDqu1FqTmzBY0ogfnDSOkKK2Q9VmsnI7Eo='
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        })

    };

    function searchYelp(req, res) {

        var term = req.query.search;
        var location = req.query.location;

        yelp.search({term: term, location: location})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.error(err);
            });

    }
};


