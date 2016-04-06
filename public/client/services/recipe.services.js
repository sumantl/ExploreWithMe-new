(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("RecipeService", RecipeService);

    function RecipeService ($http) {

        var recipesList=[];
        recipesList=[
            {"_id": "000", "name": "Daal Chawal", "userId": 123},
            {"_id": "001", "name": "Poha", "userId": 123},
            {"_id": "020", "title": "Samsosa", "userId": 234},
        ];

        var api = {
            createRecipeForUser: createRecipeForUser,
            findAllRecipeForUser: findAllRecipeForUser,
            deleteRecipeById: deleteRecipeById,
            updateRecipeById: updateRecipeById,
        };
        return api;

        function createRecipeForUser(userId, recipe, callback) {
            var tempRecipe ={}
            angular.copy(recipe,tempRecipe);
            tempRecipe._id=(new Date).getTime();
            tempRecipe.userId = userId;
            recipesList.push(tempRecipe);
            callback(tempRecipe)
        }

        function findAllRecipeForUser(userId, callback) {
            var userRecipesList=[];
            for(var i = 0; i<recipesList.length; i++){
                if(recipesList[i].userId == userId){
                    userRecipesList.push(recipesList[i]);
                }
            }
            callback(userRecipesList);
        }

        function deleteRecipeById(recipeId, callback) {


            for (var i = 0; i < recipesList.length; i++) {
                if (recipesList[i]._id == recipeId) {
                    recipesList.splice(i, 1);

                }
            }
            callback(recipesList);
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