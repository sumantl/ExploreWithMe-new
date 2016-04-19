var q = require("q");
var uuid = require('node-uuid');

module.exports = function(db, mongoose) {

    var itinerarySchema = require('./itinerary.schema.server.js')(mongoose);

    var Itinerary = mongoose.model("itinerary", itinerarySchema);


    var api = {
        findItineraryForUser: findItineraryForUser,
        findAllItinerary: findAllItinerary,
        findItineraryByName: findItineraryByName,
        findItineraryById: findItineraryById,
        findCommentsByEntity :findCommentsByEntity,
        createItinerary: createItinerary,
        deleteItineraryById: deleteItineraryById

    };
    return api;

    function findCommentsByEntity(){

    }



    function findItineraryForUser(userId) {

        var deferred = q.defer();

        Itinerary.find(
            {'userId': userId},
            function(err, commentList){
                deferred.resolve(commentList);
            });
        return deferred.promise;
    }


    function findAllItinerary() {
        var deferred = q.defer();

        Itinerary.find(
            function(err, itineraryList){
                deferred.resolve(itineraryList);
            });
        return deferred.promise;
    }

    function findItineraryByName(itineraryName){

        var deferred = q.defer();

        console.log('/'+itineraryName+'/i');

        Itinerary.find(
            {'name': new RegExp(itineraryName,'i')},
            function(err, itineraryList){
                console.log(itineraryList);
                deferred.resolve(itineraryList);
            });
        return deferred.promise;
    }

    function findItineraryById(itineraryId){

        var deferred = q.defer();

        Itinerary.findOne(
            {'_id': itineraryId},
            function(err, itinerary){
                deferred.resolve(itinerary);
            });
        return deferred.promise;


    }



    function createItinerary(itinerary) {

        var deferred = q.defer();

        console.log("In itinerary.model.server.js");
        Itinerary.create(itinerary,
            function(err, itinerary){
                console.log(itinerary);
                deferred.resolve(itinerary);
            });
        return deferred.promise;
    }

    function deleteItineraryById(itineraryId) {
        var deferred = q.defer();

        Itinerary.remove({_id : itineraryId},
            function(err, itinerary){
                deferred.resolve(itinerary);
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



