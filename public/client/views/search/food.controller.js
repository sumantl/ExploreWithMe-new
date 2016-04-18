(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodSearchController", FoodSearchController);

    function FoodSearchController($http, $scope, $rootScope, $location, $routeParams, YelpService) {


        $scope.search = search;

        function initialise(){
            YelpService.init();

            if(navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(function(position) {

                    console.log("Latitude: " + position.coords.latitude +
                        "<br>Longitude: " + position.coords.longitude );

                });
            }


    }

        initialise();
        function search(query, loc) {
            loc = $scope.location;

        YelpService.searchYelp(query, loc)
                .then(function(response){
                $scope.scopeFoodSearchList = response.data;
                console.log($scope.scopeFoodSearchList);
                });
        }
    }
})();