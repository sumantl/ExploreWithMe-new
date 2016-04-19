(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("ItinerarySearchController", ItinerarySearchController);

    function ItinerarySearchController($http, $scope, $rootScope, $location, $routeParams, ItineraryService) {


        $scope.search = search;


        function search(itinerary) {

            ItineraryService
                .findItineraryByName(itinerary.name)
                .then(function(response){
                    $scope.searchItineraryList = response.data;
                    console.log($scope.searchItineraryList);
                });
        }
    }
})();