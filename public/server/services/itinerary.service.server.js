module.exports = function(app, itineraryModel){

    app.post('/api/itinerary', createItinerary);
    app.get('/api/itinerary/:userId', findItineraryForUser);
    app.delete('/api/itinerary/:itineraryId', deleteItineraryById);
    app.get('/api/itinerary', findItinerary);
    app.get('/api/itinerary/id/:itineraryId', findItineraryById);

    function findItinerary(req, res){
        if(req.query.itineraryName){
            console.log("searching itinerary by name");
            console.log(req.query.itineraryName);
            findItineraryByName(req.query.itineraryName, res)

        }
        else
            findAllItinerary(req, res);
    }

    function findAllItinerary(req, res){
        itineraryModel
            .findAllItinerary()
            .then(function (itineraryList){
                res.json(itineraryList);
            });
    }

    function findItineraryByName(itineraryName, res){
        itineraryModel

            .findItineraryByName(itineraryName)
            .then(function (itineraryList){
                res.json(itineraryList);
            });
    }

    function findItineraryById(req, res){
        var itineraryId = req.params.itineraryId;

        itineraryModel
            .findItineraryById(itineraryId)
            .then(function(itinerary){
                res.json(itinerary);
            });
    }



    function deleteItineraryById(req, res){
        itineraryModel
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

