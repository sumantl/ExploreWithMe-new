var Yelp = require('yelp');

module.exports = function(app, Promise){

    var yelp = new Yelp({
        consumer_key: 'r7UvikICvNylN1CbaoX5LA',
        consumer_secret: 'tXf4iGd0eFdSiRmtVtmHEYRNOjE',
        token: 'u_ku2Gh2Yr-HO0EmXvh6eUmcGYPVCFp7',
        token_secret: 'uqbsTDCLt19m-z91El4P5NOO8dM',
    });


    app.get('/api/yelp/search', searchYelp);
    app.get('/api/yelp/search/:business', searchBusiness);


    function searchBusiness(req, res){

        var businessTerm = req.params.business;
        console.log(businessTerm);
        yelp.business(businessTerm)
            .then(function (data){
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            });
}

    function test(){

    }



    function searchYelp(req, res) {

        var term = req.query.search;
        var location = req.query.location;

        yelp.search({term: term, location: location})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
            });

    }
};


