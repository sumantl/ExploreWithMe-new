(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("RecipeDetailController", RecipeDetailController);

    function RecipeDetailController($scope, $rootScope, $location, $routeParams, RecipeService) {

        $scope.entityId = $routeParams.recipeId;




        RecipeService
            .findRecipeById($scope.entityId)
            .then(function (recipe) {
                console.log(recipe.data);
                $scope.recipeDetail = recipe.data;


            })
    }

})();