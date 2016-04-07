(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodDetailController", FoodDetailController);

    function FoodDetailController($scope, $rootScope, $location, $routeParams, YelpService) {

        $scope.commentList = [];
        var comment = {username : "Sumant", description : "Is it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it working", days: "5"};
        $scope.commentList.push(comment);


        $scope.foodId = $routeParams.foodId;
        YelpService.searchBusiness($scope.foodId).
            then(function (response) {
            console.log(response.data);
            $scope.hotelDetails = response.data;
        });
    }

})();