var q = require("q");
var uuid = require('node-uuid');

module.exports = function(db, mongoose) {

    var restaurantSchema = require('./restaurant.schema.server.js')(mongoose);

    var Restaurant = mongoose.model("restaurant", restaurantSchema);


    var api = {
        findRecipeForUser: findRecipeForUser,
        findAllRestaurant: findAllRestaurant,
        findCommentsByEntity :findCommentsByEntity,
        createRestaurant: createRestaurant,
        deleteRestaurantById: deleteRestaurantById

    };
    return api;

    function findCommentsByEntity(){

    }



    function findRecipeForUser(userId) {

        var deferred = q.defer();

        Recipe.find(
            {'userId': userId},
            function(err, commentList){
                deferred.resolve(commentList);
            });
        return deferred.promise;
    }


    function findAllRestaurant() {
        var deferred = q.defer();

        Restaurant.find(
            function(err, restaurantList){
                deferred.resolve(restaurantList);
            });
        return deferred.promise;
    }

    function createRestaurant(restaurant) {

        var deferred = q.defer();

        Restaurant.create(restaurant,
            function(err, restaurant){
                console.log(restaurant);
                deferred.resolve(restaurant);
            });
        return deferred.promise;
    }

    function deleteRestaurantById(restaurantId) {
        var deferred = q.defer();

        Restaurant.remove({_id : restaurantId},
            function(err, result){
                deferred.resolve(result);
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

