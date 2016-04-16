(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('AddRecipeController',AddRecipeController);

    function AddRecipeController($scope, $rootScope, $location, RecipeService) {


        var userId = $rootScope.user._id;



        $scope.addRecipe = function(recipe) {

            RecipeService
                .createRecipeForUser(userId, recipe)
                .then(function (response){
                    //$location.path();
                });


           }
    }

})();
