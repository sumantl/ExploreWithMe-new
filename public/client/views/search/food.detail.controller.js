(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("FoodDetailController", FoodDetailController);

    function FoodDetailController($scope, $rootScope, $location, $routeParams, GooglePlaces, YelpService) {

        /*
        GooglePlaces.initAutocomplete(function(response){
            $scope.scopePlaceList = response;
            console.log(response);
        });
        */

        $scope.map = {
            "center": {
                "latitude": 52.47491894326404,
                "longitude": -1.8684210293371217
            },
            "zoom": 15
        }; //TODO:  set location based on users current gps location
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 52.47491894326404,
                longitude: -1.8684210293371217
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {

                    $scope.marker.options = {
                        draggable: true,
                        labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                        labelAnchor: "100 0",
                        labelClass: "marker-labels"
                    };
                }
            }
        };
        var events = {
            places_changed: function (searchBox) {
                var place = searchBox.getPlaces();
                if (!place || place == 'undefined' || place.length == 0) {
                    console.log('no place data :(');
                    return;
                }

                $scope.map = {
                    "center": {
                        "latitude": place[0].geometry.location.lat(),
                        "longitude": place[0].geometry.location.lng()
                    },
                    "zoom": 18
                };
                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: place[0].geometry.location.lat(),
                        longitude: place[0].geometry.location.lng()
                    }
                };
            }
        };
        $scope.searchbox = { template: 'views/search/searchbox.tpl.html', events: events };


        $scope.entityId = $routeParams.foodId;
        YelpService.searchBusiness($scope.entityId).
            then(function (response) {
            console.log(response.data);
            $scope.hotelDetails = response.data;
            //$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        });
    }

})();