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
            addRestaurant: addRestaurant,
            findAllRestaurant: findAllRestaurant,
            deleteRestaurantById: deleteRestaurantById,
            updateRestaurantById: updateRestaurantById,
        };
        return api;

        function addRestaurant(userId, restaurant) {
            restaurant.userId = userId;
            return $http.post('/api/restaurant',restaurant);
        }

        function findAllRestaurant() {
           return $http.get('/api/restaurant');
        }

        function deleteRestaurantById(restaurantId) {


           return $http.delete('/api/restaurant/'+restaurantId);
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