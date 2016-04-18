module.exports = function(app, itineraryModel){

    app.post('/api/itinerary', createItinerary);
    app.get('/api/itinerary/:userId', findItineraryForUser);
    app.delete('/api/itinerary/:itineraryId', deleteItineraryById);
    app.get('/api/itinerary', findAllItinerary);

    function findAllItinerary(req, res){
        destinationModel
            .findAllItinerary()
            .then(function (itineraryList){
                res.json(itineraryList);
            });
    }


    function deleteItineraryById(req, res){
        destinationModel
            .deleteItineraryById(req.params.itineraryId)
            .then(function (itinerary){
                findAllItinerary(req,res);
            });

    }

    function createItinerary(req, res) {
        console.log("In itinerary.service.server");
        itineraryModel.createItinerary(req.body)
            .then(function (itinerary ) {
                res.json(itinerary);
            });

    }

    function findItineraryForUser(req, res){
        itineraryModel.findItineraryForUser(req.params.userId)
            .then(function (itineraryList){
                console.log(itineraryModel);
                res.json(itineraryList);
            });
    }

};

