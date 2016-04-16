(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('AddRestaurantController',AddRestaurantController);

    function AddRestaurantController($scope, $rootScope, $location, RestaurantService) {


        var userId = $rootScope.user._id;



        $scope.addRestaurant = function(restaurant) {

            RestaurantService
                .addRestaurant(userId, restaurant)
                .then(function (response){
                    //$location.path();
                });
        }
    }

})();
