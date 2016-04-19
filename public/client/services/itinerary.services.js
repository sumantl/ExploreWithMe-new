(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("ItineraryService", ItineraryService);

    function ItineraryService ($http) {

        var itinerarysList=[];
        itinerarysList=[
            {"_id": "000", "name": "Alaska", "userId": 123},
            {"_id": "001", "name": "Canada", "userId": 123},
            {"_id": "020", "title": "Leh", "userId": 234},
        ];

        var api = {
            createItineraryForUser: createItineraryForUser,
            findAllItineraryForUser: findAllItineraryForUser,
            findAllItinerary: findAllItinerary,
            findItineraryByName: findItineraryByName,
            findItineraryById: findItineraryById,
            deleteItineraryById: deleteItineraryById,
            updateItineraryById: updateItineraryById,
        };
        return api;

        function createItineraryForUser(userId, itinerary, callback) {
        console.log("In Intinerary.services.js");

            itinerary.userId = userId;
            return $http.post('/api/itinerary', itinerary);

        }

        function findAllItineraryForUser(userId, callback) {
            var userItinerarysList=[];
            for(var i = 0; i<itinerarysList.length; i++){
                if(itinerarysList[i].userId == userId){
                    userItinerarysList.push(itinerarysList[i]);
                }
            }
            callback(userItinerarysList);
        }

        function findAllItinerary(){
            console.log("In itinerary.ckient.service");
            return $http.get("/api/itinerary");
        }

        function findItineraryByName(itineraryName){
            return $http.get("/api/itinerary?itineraryName="+itineraryName);
        }

        function findItineraryById(itineraryId){

            return $http.get('/api/itinerary/id/'+itineraryId);
        }


        function deleteItineraryById(itineraryId) {
            return $http.delete('/api/itinerary/'+itineraryId);
        }

        function updateItineraryById (itineraryId, newItinerary, callback){
            var result=null;
            for(var i=0;i<itinerarysList.length;i++){
                if(itinerarysList[i]._id == itineraryId){

                    angular.copy(newItinerary,itinerarysList[i]);
                    angular.copy(itinerarysList[i],result);
                    break;
                }
            }
            callback(result);
        }
    }

})();

