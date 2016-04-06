(function(){

angular.module('ExploreWithMeApp')
    .controller('PlaceController', PlaceController);

    function PlaceController ($scope, $rootScope, $location, GooglePlaces) {


        GooglePlaces.initAutocomplete(function(response){
            $scope.scopePlaceList = response;
            console.log(response);
        });
        $scope.search = search;


        function  search(query){
            var temp = {};
            GooglePlaces.searchPlaces(query)
                .then(function(response){

                    console.log(response.data.results);
                    $scope.scopePlaceList = response.data.results;
                    console.log(response)
                });
        }


        /*
        function search(query){
            GooglePlaces.initMap(query, function (results, status){
                $scope.scopePlaceList=results;
                GooglePlaces.render(results,status);
                console.log($scope.scopePlaceList);


            });
        }

        */



    }
})();

