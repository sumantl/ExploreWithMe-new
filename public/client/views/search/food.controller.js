(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodSearchController", FoodSearchController);

    function FoodSearchController($http, $scope, $rootScope, $location, $routeParams, YelpService) {

        $scope.location="02120";
        $scope.search = search;

        function initialise(){
            if(navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(function(position) {

                    console.log("Latitude: " + position.coords.latitude +
                        "<br>Longitude: " + position.coords.longitude );

                });
            }

            YelpService.init();
    }

        initialise();
        function search(query, loc) {

        YelpService.searchYelp(query, loc)
                .then(function(response){
                $scope.scopeFoodSearchList = response.data;
                console.log($scope.scopeFoodSearchList);
                });
        }
    }
})();