
module.exports = function(app, recipeModel){

    app.post('/api/recipe', createRecipe);
    app.get('/api/recipe/:userId', findRecipeForUser);
    app.delete('/api/recipe/:recipeId', deleteRecipeById);
    app.get('/api/recipe', findAllRecipe);

    function findAllRecipe(req, res){
        recipeModel
            .findAllRecipe()
            .then(function (recipeList){
                res.json(recipeList);
            });
    }


    function deleteRecipeById(req, res){
        recipeModel
            .deleteRecipeById(req.params.recipeId)
            .then(function (recipe){
                findAllRecipe(req,res);
            });

    }

    function createRecipe(req, res) {
        recipeModel.createRecipe(req.body)
            .then(function (recipe) {
                res.json(recipe);
            });

    }

    function findRecipeForUser(req, res){
        recipeModel.findRecipeForUser(req.params.userId)
            .then(function (recipeList){
                console.log(recipeModel);
                res.json(recipeList);
            });
    }

};