(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("RecipeService", RecipeService);

    function RecipeService ($http) {



        var api = {
            createRecipeForUser: createRecipeForUser,
            findAllRecipeForUser: findAllRecipeForUser,
            findRecipeByName : findRecipeByName,
            findRecipeById : findRecipeById,
            findAllRecipe : findAllRecipe,
            deleteRecipeById: deleteRecipeById,
            updateRecipeById: updateRecipeById,
        };
        return api;


        function findRecipeById(recipeId){
            return $http.get('/api/recipe/id/'+recipeId);
        }

        function findRecipeByName(recipeName){

            return $http.get('/api/recipe?recipeName='+recipeName);

        }

        function createRecipeForUser(userId, recipe) {
            recipe.userId = userId;
           return $http.post('/api/recipe',recipe);
        }


        function findAllRecipe(){
            return $http.get('/api/recipe');
        }

        function findAllRecipeForUser(userId) {

           return $http.get('/api/recipe/'+userId);

        }

        function deleteRecipeById(recipeId) {

            return $http.delete('/api/recipe/'+recipeId);


        }

        function updateRecipeById (recipeId, newRecipe, callback){
            var result=null;
            for(var i=0;i<recipesList.length;i++){
                if(recipesList[i]._id == recipeId){

                    angular.copy(newRecipe,recipesList[i]);
                    angular.copy(recipesList[i],result);
                    break;
                }
            }
            callback(result);
        }
    }

})();