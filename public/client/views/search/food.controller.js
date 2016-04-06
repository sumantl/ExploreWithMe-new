(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodSearchController", FoodSearchController);

    function FoodSearchController($http, $scope, $rootScope, $location, $routeParams, YelpService) {

        $scope.location="02120";
        $scope.search = search;
        function search(query, loc) {

        YelpService.searchYelp(query, loc)
                .then(function(response){
                $scope.scopeFoodSearchList = response.data;
                console.log($scope.scopeFoodSearchList);
                });
        }
    }
})();