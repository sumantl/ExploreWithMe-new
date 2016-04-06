(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("RestaurantService", RestaurantService);

    function RestaurantService ($http) {

        var restaurantsList=[];
        restaurantsList=[
            {"_id": "000", "name": "Border Cafe", "userId": 123},
            {"_id": "001", "name": "Cheese Cake Factory", "userId": 123},
            {"_id": "020", "title": "Pho Basil", "userId": 234},
        ];

        var api = {
            createRestaurantForAdmin: createRestaurantForAdmin,
            findAllRestaurantForAdmin: findAllRestaurantForAdmin,
            deleteRestaurantById: deleteRestaurantById,
            updateRestaurantById: updateRestaurantById,
        };
        return api;

        function createRestaurantForAdmin(userId, restaurant, callback) {
            var tempRestaurant ={}
            angular.copy(restaurant,tempRestaurant);
            tempRestaurant._id=(new Date).getTime();
            tempRestaurant.userId = userId;
            restaurantsList.push(tempRestaurant);
            callback(tempRestaurant)
        }

        function findAllRestaurantForAdmin(userId, callback) {
            var userRestaurantsList=[];
            for(var i = 0; i<restaurantsList.length; i++){
                if(restaurantsList[i].userId == userId){
                     userRestaurantsList.push(restaurantsList[i]);
                }
            }
            callback(userRestaurantsList);
        }

        function deleteRestaurantById(restaurantId, callback) {


            for (var i = 0; i < restaurantsList.length; i++) {
                if (restaurantsList[i]._id == restaurantId) {
                    restaurantsList.splice(i, 1);

                }
            }
            callback(restaurantsList);
        }

        function updateRestaurantById (restaurantId, newRestaurant, callback){
            var result=null;
            for(var i=0;i<restaurantsList.length;i++){
                if(restaurantsList[i]._id == restaurantId){

                    angular.copy(newRestaurant,restaurantsList[i]);
                    angular.copy(restaurantsList[i],result);
                    break;
                }
            }
            callback(result);
        }
    }

})();