
module.exports = function(app, recipeModel){

    app.post('/api/recipe', createRecipe);
    app.get('/api/recipe/:userId', findRecipeForUser);
    app.delete('/api/recipe/:recipeId', deleteRecipeById);
    app.get('/api/recipe', findRecipe);
    app.get('/api/recipe/id/:recipeId',findRecipeById);


    function findRecipeById(req, res){
        var recipeId = req.params.recipeId;

        recipeModel
            .findRecipeById(recipeId)
            .then(function(recipe){
                res.json(recipe);
            });
    }


    function findRecipe(req, res){
        if(req.query.recipeName){
            console.log("searching recipe by name");
            console.log(req.query.recipeName);
            findRecipeByName(req.query.recipeName, res)

        }
        else
            res.json(findAllRecipe(req, res));
    }

    function findRecipeByName(recipeName, res){
        recipeModel
            .findRecipeByName(recipeName)
            .then(function (recipeList){
                res.json(recipeList);
            });
    }

    function findAllRecipe(){
        recipeModel
            .findAllRecipe()
            .then(function (recipeList){
                return recipeList;
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
        recipeModel
            .createRecipe(req.body)
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