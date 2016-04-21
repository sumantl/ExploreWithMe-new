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

                    $scope.itinerary={};
                    $scope.success=true;
                });
        }
    }

})();
