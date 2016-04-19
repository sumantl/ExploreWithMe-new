var q = require("q");
var uuid = require('node-uuid');

module.exports = function(db, mongoose) {

    var destinationSchema = require('./destination.schema.server.js')(mongoose);

    var Destination = mongoose.model("destination", destinationSchema);


    var api = {
        findDestinationForUser: findDestinationForUser,
        findAllDestination: findAllDestination,
        findDestinationByName: findDestinationByName,
        findDestinationById: findDestinationById,
        findCommentsByEntity :findCommentsByEntity,
        createDestination: createDestination,
        deleteDestinationById: deleteDestinationById

    };
    return api;

    function findCommentsByEntity(){

    }

    function findDestinationById(destinationId){

        var deferred = q.defer();

        Destination.findOne(
            {'_id': destinationId},
            function(err, destination){
                deferred.resolve(destination);
            });
        return deferred.promise;


    }


    function findDestinationForUser(userId) {

        var deferred = q.defer();

        Destination.find(
            {'userId': userId},
            function(err, commentList){
                deferred.resolve(commentList);
            });
        return deferred.promise;
    }


    function findAllDestination() {
        var deferred = q.defer();

        console.log("In destination.model.server.js");
        Destination.find(
            function(err, destinationList){
                deferred.resolve(destinationList);
            });
        return deferred.promise;
    }

    function findDestinationByName(destinationName){

        var deferred = q.defer();

        console.log('/'+destinationName+'/i');

        Destination.find(
            {'name': new RegExp(destinationName,'i')},
            function(err, destinationList){
                console.log(destinationList);
                deferred.resolve(destinationList);
            });
        return deferred.promise;
    }


    function createDestination(destination) {

        var deferred = q.defer();

        console.log("In destination.model.server.js");
        Destination.create(destination,
            function(err, destination){
                console.log(destination);
                deferred.resolve(destination);
            });
        return deferred.promise;
    }

    function deleteDestinationById(destinationId) {
        var deferred = q.defer();

        Destination.remove({_id : destinationId},
            function(err, destination){
                deferred.resolve(destination);
            });
        return deferred.promise;

    }


    function updateUser(userId, user) {

        var deferred = q.defer();
        delete user._id;

        console.log(userId);

        User.update(
            {'_id' : userId},
            {$set : user},
            function(err, update){
                if(err){
                    console.log("error updating");
                    console.log(err);
                    deferred.reject(err);
                }
                else{

                    console.log("success");
                    console.log(update);
                }
            }
        );
        return deferred.promise;
    }

};


