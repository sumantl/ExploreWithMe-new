module.exports = function(app, destinationModel){

    app.post('/api/destination', createDestination);
    app.get('/api/destination/:userId', findDestinationForUser);
    app.delete('/api/destination/:destinationId', deleteDestinationById);
    app.get('/api/destination', findAllDestination);

    function findAllDestination(req, res){
        destinationModel
            .findAllDestination()
            .then(function (destinationList){
                res.json(destinationList);
            });
    }


    function deleteDestinationById(req, res){
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
