(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('AddItineraryController',AddItineraryController);

    function AddItineraryController($scope, $rootScope, $location, ItineraryService) {

        var userId = $rootScope.user_id;

        $scope.addItinerary = function(itinerary) {

            ItineraryService
                .createItineraryForUser(userId, itinerary)
                .then(function (response) {

                    console.log("In add-Itinerary-controller");
                });
        }
    }

})();
