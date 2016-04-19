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
            findAllDestination: findAllDestination,
            findDestinationByName: findDestinationByName,
            findDestinationById: findDestinationById,
            deleteDestinationById: deleteDestinationById,
            updateDestinationById: updateDestinationById,
        };
        return api;

        function createDestinationForUser(userId, destination, callback) {

            console.log("In Destination Service");

            destination.userId = userId;
            return $http.post('/api/destination',destination);

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

        function findAllDestination()
        {
            console.log("In destination.client.services.js");
            return $http.get("/api/destination");
        }

        function findDestinationByName(destinationName){

            return $http.get('/api/destination?destinationName='+destinationName);

        }

        function findDestinationById(destinationId){

            return $http.get('/api/destination/id/'+destinationId);
        }


        function deleteDestinationById(destinationId) {
            console.log("in destination.client.service");

            return $http.delete('/api/destination/'+destinationId);
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

