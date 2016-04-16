(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('RestaurantController', RestaurantController);

    function RestaurantController($scope, $rootScope, $location, RestaurantService) {

        $scope.selIndex = null;
        $scope.scopeRestaurantList = [];
        var currentUser = $rootScope.user;



        function initialiseRestaurant() {
            getUserRestaurants();
        }

        initialiseRestaurant();


        function getUserRestaurants() {

            RestaurantService
                .findAllRestaurant()
                .then(function (response){
                    $scope.scopeRestaurantList =response.data;

                })

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


        $scope.deleteRestaurant = function (restaurant) {

            console.log("del rest");
            RestaurantService
                .deleteRestaurantById(restaurant._id)
                .then(function(response){
                    getUserRestaurants();
                });
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