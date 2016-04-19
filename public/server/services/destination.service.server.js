module.exports = function(app, destinationModel){

    app.post('/api/destination', createDestination);
    app.get('/api/destination/:userId', findDestinationForUser);
    app.delete('/api/destination/:destinationId', deleteDestinationById);
    app.get('/api/destination', findDestination);
    app.get('/api/destination/id/:destinationId', findDestinationById);

    function findDestination(req, res){
        if(req.query.destinationName){
            console.log("searching destination by name");
            console.log(req.query.destinationName);
            findDestinationByName(req.query.destinationName, res)

        }
        else
            findAllDestination(req, res);
    }

    function findDestinationByName(destinationName, res){
        destinationModel
            .findDestinationByName(destinationName)
            .then(function (destinationList){
                res.json(destinationList);
            });
    }

    function findAllDestination(req, res){
        destinationModel
            .findAllDestination()
            .then(function (destinationList){
                console.log(destinationList);
                res.json(destinationList);
            });
      //  console.log(destinationList);
    }

    function findDestinationById(req, res){
        var destinationId = req.params.destinationId;

        destinationModel
            .findDestinationById(destinationId)
            .then(function(destination){
                res.json(destination);
            });
    }


    function deleteDestinationById(req, res){
        console.log("in destination.server.service");
        destinationModel
            .deleteDestinationById(req.params.destinationId)
            .then(function (destination){
                findAllDestination(req,res);
            });
    }

    function createDestination(req, res) {
        console.log("In destination.service.server");
        destinationModel.createDestination(req.body)
            .then(function (destination ) {
                res.json(destination);
            });

    }

    function findDestinationForUser(req, res){
        destinationModel.findDestinationForUser(req.params.userId)
            .then(function (destinationList){
                console.log(destinationModel);
                res.json(destinationList);
            });
    }

};
