(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodDetailController", FoodDetailController);

    function FoodDetailController($scope, $rootScope, $location, $routeParams, YelpService) {

        $scope.foodId = $routeParams.foodId;
        YelpService.searchBusiness($scope.foodId).
            then(function (response) {
            console.log(response.data);
            $scope.hotelDetails = response.data;
        });
    }

})();