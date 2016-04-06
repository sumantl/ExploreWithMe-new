(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('RestaurantController', RestaurantController);

    function RestaurantController($scope, $rootScope, $location, RestaurantService) {

        $scope.selIndex = null;
        $scope.scopeRestaurantList = [];
        var currentUser = $rootScope.user;
        var currentUserRestaurants = $scope.scopeRestaurantList;


        function initialiseRestaurant() {
            getUserRestaurants(currentUser._id);
        }

        initialiseRestaurant();


        function getUserRestaurants(userId) {

            RestaurantService.findAllRestaurantForAdmin(userId, function (response) {
                angular.copy(response, currentUserRestaurants);
            });
        }

        $scope.addRestaurant = function (restaurant) {
            RestaurantService.createRestaurantForAdmin(
                currentUser._id,
                restaurant,
                function (response) {
                    currentUserRestaurants.push(response);
                    $scope.restaurant = {};
                    $scope.selIndex = null;
                }
            )
        };

        $scope.updateRestaurant = function (restaurant) {

            RestaurantService.updateRestaurantById(restaurant._id, restaurant, function (response) {
                getUserRestaurants(currentUser._id);
            });
            $scope.restaurant={};
        };


        $scope.deleteRestaurant = function (index) {


            RestaurantService.deleteRestaurantById(currentUserRestaurants[index]._id, function (response) {
                getUserRestaurants(currentUser._id);
            });
            $scope.restaurant={};
        };


        $scope.selectRestaurant = function (index) {
            $scope.selIndex = index;

            $scope.restaurant = {
                "_id": currentUserRestaurants[index]._id,
                "name": currentUserRestaurants[index].name,
                "userId": currentUserRestaurants[index].userId
            };
        };


    }
})();