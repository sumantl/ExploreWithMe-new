(function(){

angular.module('ExploreWithMeApp')
    .controller('PlaceController', PlaceController);

    function PlaceController ($scope, $rootScope, $location, GooglePlaces) {

/*
        GooglePlaces.initAutocomplete(function(response){
            $scope.scopePlaceList = response;

        });


        */
        GooglePlaces.initAutocomplete()
            .then(function (response){
                console.log(response);
                $scope.scopePlaceList = response;

            });



        function init(){

            GooglePlaces.initAutocomplete()
                .then(function (response){
                    console.log(response);
                    $scope.scopePlaceList = response;

                });
        }


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




    }
})();

