(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("DestinationService", DestinationService);

    function DestinationService ($http) {

        var destinationsList=[];
        destinationsList=[
            {"_id": "000", "name": "Boston Common", "userId": 123},
            {"_id": "001", "name": "Harbour Point", "userId": 123},
            {"_id": "020", "title": "Leh", "userId": 234},
        ];

        var api = {
            createDestinationForUser: createDestinationForUser,
            findAllDestinationForUser: findAllDestinationForUser,
            deleteDestinationById: deleteDestinationById,
            updateDestinationById: updateDestinationById,
        };
        return api;

        function createDestinationForUser(userId, destination, callback) {
            var tempDestination ={};
            angular.copy(destination,tempDestination);
            tempDestination._id=(new Date).getTime();
            tempDestination.userId = userId;
            destinationsList.push(tempDestination);
            callback(tempDestination);
        }

        function findAllDestinationForUser(userId, callback) {
            var userDestinationsList=[];
            for(var i = 0; i<destinationsList.length; i++){
                if(destinationsList[i].userId == userId){
                    userDestinationsList.push(destinationsList[i]);
                }
            }
            callback(userDestinationsList);
        }

        function deleteDestinationById(destinationId, callback) {


            for (var i = 0; i < destinationsList.length; i++) {
                if (destinationsList[i]._id == destinationId) {
                    destinationsList.splice(i, 1);

                }
            }
            callback(destinationsList);
        }

        function updateDestinationById (destinationId, newDestination, callback){
            var result=null;
            for(var i=0;i<destinationsList.length;i++){
                if(destinationsList[i]._id == destinationId){

                    angular.copy(newDestination,destinationsList[i]);
                    angular.copy(destinationsList[i],result);
                    break;
                }
            }
            callback(result);
        }
    }

})();

