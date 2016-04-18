(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("RestaurantDetailController", RestaurantDetailController);

    function RestaurantDetailController($scope, $rootScope, $location, $routeParams, RestaurantService) {

        $scope.entityId = $routeParams.restaurantId;




        RestaurantService
            .findRestaurantById($scope.entityId)
            .then(function (restaurant) {
                console.log(restaurant.data);
                $scope.restaurantDetail = restaurant.data;


            })
    }

})();