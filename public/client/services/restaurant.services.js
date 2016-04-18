(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("RestaurantService", RestaurantService);

    function RestaurantService ($http) {


        var api = {
            addRestaurant: addRestaurant,
            findAllRestaurant: findAllRestaurant,
            findRestaurantByName : findRestaurantByName,
            findRestaurantById : findRestaurantById,
            deleteRestaurantById: deleteRestaurantById,
            updateRestaurantById: updateRestaurantById,
        };
        return api;


        function findRestaurantById(restaurantId){
            return $http.get('/api/restaurant/id/'+restaurantId);

        }

        function findRestaurantByName(restaurantName){
            return $http.get('/api/restaurant?restaurantName='+restaurantName);
        }

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