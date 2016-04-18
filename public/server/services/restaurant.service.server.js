module.exports = function(app, restaurantModel){

    app.post('/api/restaurant', createRestaurant);
    //app.get('/api/recipe/:userId', findRecipeForUser);
    app.delete('/api/restaurant/:restaurantId', deleteRestaurantById);
    app.get('/api/restaurant', findRestaurant);
    app.get('/api/restaurant/id/:restaurantId', findRestaurantById);



    function findRestaurantById(req, res){
        var restaurantId = req.params.restaurantId;

        restaurantModel
            .findRestaurantById(restaurantId)
            .then(function(restaurant){
                res.json(restaurant);
            });
    }

    function findRestaurant(req, res){
        if(req.query.restaurantName){
            console.log("searching restaurant by name");
            console.log(req.query.restaurantName);
            findRestaurantByName(req.query.restaurantName, res)

        }
        else
            findAllRestaurant(req, res);
    }

    function findRestaurantByName(restaurantName, res){
        restaurantModel
            .findRestaurantByName(restaurantName)
            .then(function (restaurantList){
                res.json(restaurantList);
            });
    }



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