(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("RecipeSearchController", RecipeSearchController);

    function RecipeSearchController($http, $scope, $rootScope, $location, $routeParams, RecipeService) {


        $scope.search = search;


        function search(recipe) {


            RecipeService
                .findRecipeByName(recipe.name)
                .then(function(response){
                    $scope.searchRecipeList = response.data;
                    console.log($scope.searchRecipeList);
                });
        }
    }
})();