var q = require("q");
var uuid = require('node-uuid');

module.exports = function(db, mongoose) {

    var recipeSchema = require('./recipe.schema.server.js')(mongoose);

    var Recipe = mongoose.model("recipe", recipeSchema);


    var api = {
        findRecipeForUser: findRecipeForUser,
        findAllRecipe: findAllRecipe,
        findRecipeByName : findRecipeByName,
        findRecipeById: findRecipeById,
        findCommentsByEntity :findCommentsByEntity,
        createRecipe: createRecipe,
        deleteRecipeById: deleteRecipeById

    };
    return api;


    function findRecipeById(recipeId){

        var deferred = q.defer();

        Recipe.findOne(
            {'_id': recipeId},
            function(err, recipe){
                deferred.resolve(recipe);
            });
        return deferred.promise;


    }

    function findCommentsByEntity(){

    }

    function findRecipeByName(recipeName){

        var deferred = q.defer();

        console.log('/'+recipeName+'/i');

        Recipe.find(
            {'name': new RegExp(recipeName,'i')},
            function(err, recipeList){
                console.log(recipeList);
                deferred.resolve(recipeList);
            });
        return deferred.promise;
    }



    function findRecipeForUser(userId) {

        var deferred = q.defer();

        Recipe.find(
            {'userId': userId},
            function(err, recipeList){
                deferred.resolve(recipeList);
            });
        return deferred.promise;
    }


    function findAllRecipe() {
        var deferred = q.defer();

        Recipe.find(
            function(err, recipeList){
                deferred.resolve(recipeList);
            });
        return deferred.promise;
    }

    function createRecipe(recipe) {

        var deferred = q.defer();

        Recipe.create(recipe,
            function(err, recipe){
                console.log(recipe);
                deferred.resolve(recipe);
            });
        return deferred.promise;
    }

    function deleteRecipeById(recipeId) {
        var deferred = q.defer();

        Recipe.remove({_id : recipeId},
            function(err, recipe){
                deferred.resolve(recipe);
            });
        return deferred.promise;

    }

    function updateUser(userId, user) {

        var deferred = q.defer();
        delete user._id;

        console.log(userId);

        User.update(
            {'_id' : userId},
            {$set : user},
            function(err, update){
                if(err){
                    console.log("error updating");
                    console.log(err);
                    deferred.reject(err);
                }
                else{

                    console.log("success");
                    console.log(update);
                }
            }
        );
        return deferred.promise;
    }

};

