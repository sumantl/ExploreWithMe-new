module.exports = function(app, restaurantModel){

    app.post('/api/restaurant', createRestaurant);
    //app.get('/api/recipe/:userId', findRecipeForUser);
    app.delete('/api/restaurant/:restaurantId', deleteRestaurantById);
    app.get('/api/restaurant', findAllRestaurant);

    function findAllRestaurant(req, res){
        restaurantModel
            .findAllRestaurant()
            .then(function (restaurantList){
                res.json(restaurantList);
            });
    }


    function deleteRestaurantById(req, res){
        restaurantModel
            .deleteRestaurantById(req.params.restaurantId)
            .then(function (restaurant){
                res.json(restaurant)
            });

    }

    function createRestaurant(req, res) {
        restaurantModel
            .createRestaurant(req.body)
            .then(function (restaurant) {
                res.json(restaurant);
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