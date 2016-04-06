(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("PlaceDetailController", PlaceDetailController);

    function PlaceDetailController($scope, $rootScope, $location, $routeParams, YelpService) {


        $scope.placeId = $routeParams.placeId;

        YelpService.searchBusiness($scope.foodId, $rootScope.searchCount, function (response) {
            console.log("1");
            console.log(response);
            $scope.hotelDetails = response;
            $rootScope.searchCount++;
        });



        function getBusinessDetails(foodId) {
            console.log("function called");


            console.log($rootScope.hotelDetails);
        }

        //console.log("1");


    }

})();