(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("RecipeDetailController", RecipeDetailController);

    function RecipeDetailController($scope, $rootScope, $location, $routeParams, RecipeService) {

        $scope.recipeId = $routeParams.recipeId;
        RecipeService.searchBusiness($scope.foodId).
        then(function (response) {
            console.log(response.data);
            $scope.hotelDetails = response.data;
        });
    }

})();