(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('RecipeController', RecipeController);

    function RecipeController($scope, $rootScope, $location, RecipeService) {

        $scope.selIndex = null;
        $scope.scopeRecipeList = [];
        var currentUser = $rootScope.user;
        var currentUserRecipes = $scope.scopeRecipeList;


        function initialiseRecipe() {
            getUserRecipe(currentUser._id);
        }

        initialiseRecipe();


        function getUserRecipe(userId) {

            RecipeService.findAllRecipeForUser(userId, function (response) {
                angular.copy(response, currentUserRecipes);
            });
        }

        $scope.addRecipe = function (recipe) {
            RecipeService.createRecipeForUser(
                currentUser._id,
                recipe,
                function (response) {
                    currentUserRecipes.push(response);
                    $scope.recipe = {};
                    $scope.selIndex = null;
                }
            )
        };

        $scope.updateRecipe = function (recipe) {


            RecipeService.updateRecipeById(recipe._id, recipe, function (response) {
                getUserRecipe(currentUser._id);
            });
            $scope.recipe={};
        };


        $scope.deleteRecipe = function (index) {


            RecipeService.deleteRecipeById(currentUserRecipes[index]._id, function (response) {
                getUserRecipe(currentUser._id);
            });
            $scope.recipe={};
        };


        $scope.selectRecipe = function (index) {
            $scope.selIndex = index;

            $scope.recipe = {
                "_id": currentUserRecipes[index]._id,
                "name": currentUserRecipes[index].name,
                "userId": currentUserRecipes[index].userId
            };
        };


    }
})();

