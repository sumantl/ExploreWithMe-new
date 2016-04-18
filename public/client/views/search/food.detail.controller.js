(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodDetailController", FoodDetailController);

    function FoodDetailController($scope, $rootScope, $location, $routeParams, YelpService) {

        $scope.entityId = $routeParams.foodId;
        YelpService.searchBusiness($scope.entityId).
            then(function (response) {
            console.log(response.data);
            $scope.hotelDetails = response.data;
        });
    }

})();