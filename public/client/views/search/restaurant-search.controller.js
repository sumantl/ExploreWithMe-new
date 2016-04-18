(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("RestaurantSearchController", RestaurantSearchController);

    function RestaurantSearchController($http, $scope, $rootScope, $location, $routeParams, RestaurantService) {


        $scope.search = search;


        function search(restaurant) {

            RestaurantService
                .findRestaurantByName(restaurant.name)
                .then(function(response){
                    $scope.searchRestaurantList = response.data;
                });
        }
    }
})();