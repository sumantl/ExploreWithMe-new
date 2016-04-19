(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("ItineraryDetailController", ItineraryDetailController);

    function ItineraryDetailController($scope, $rootScope, $location, $routeParams, ItineraryService) {

        $scope.entityId = $routeParams.itineraryId;

        ItineraryService
            .findItineraryById($scope.entityId)
            .then(function (itinerary) {
                console.log(itinerary);
                $scope.itineraryDetail = itinerary.data;
            });
    }

})();