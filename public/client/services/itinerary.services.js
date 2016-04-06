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
            deleteItineraryById: deleteItineraryById,
            updateItineraryById: updateItineraryById,
        };
        return api;

        function createItineraryForUser(userId, itinerary, callback) {
            var tempItinerary ={};
            angular.copy(itinerary,tempItinerary);
            tempItinerary._id=(new Date).getTime();
            tempItinerary.userId = userId;
            itinerarysList.push(tempItinerary);
            callback(tempItinerary);
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

        function deleteItineraryById(itineraryId, callback) {


            for (var i = 0; i < itinerarysList.length; i++) {
                if (itinerarysList[i]._id == itineraryId) {
                    itinerarysList.splice(i, 1);

                }
            }
            callback(itinerarysList);
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

