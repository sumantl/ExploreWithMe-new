module.exports = function(app){

    var request = require('request');


    app.get('/api/places/search', searchPlaces);
    app.get('/api/places/:placeId', getPlaceDetail);


    function getPlaceDetail(req, res){

        var placeId = req.params.placeId;
        var url ='https://maps.googleapis.com/maps/api/place/details/json?placeid='+placeId+'&key=AIzaSyDqu1FqTmzBY0ogfnDSOkKK2Q9VmsnI7Eo=';
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {

                res.send(body);
            }
        });


    }


    function searchPlaces(req, res){

        var searchQuery = req.query.search;
        console.log(searchQuery);
        var location;
        var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+searchQuery+'&location='+location+'&key=AIzaSyDqu1FqTmzBY0ogfnDSOkKK2Q9VmsnI7Eo='
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        });

    };


};


