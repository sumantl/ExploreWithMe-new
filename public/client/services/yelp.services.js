(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("YelpService", YelpService);

    function YelpService($http) {

        var api = {
            searchYelp: searchYelp,
            searchBusiness: searchBusiness,
            init : init
        };
        return api;


        function init(){
            var input = document.getElementById('inputLocation');
            var searchBox = new google.maps.places.SearchBox(input);
        }


        function searchYelp(search, loc) {
           return $http.get('/api/yelp/search?search='+search+'&location='+loc);
        }

        function searchBusiness(businessId) {

            return $http.get('/api/yelp/search/'+businessId);

            }

    }
})();/**
 * Created by lohiy on 3/1/2016.
 */
