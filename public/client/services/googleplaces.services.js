(function() {
    angular
        .module("ExploreWithMeApp")
        .factory("GooglePlaces", GooglePlaces);

    function GooglePlaces( $http) {

        var searchMyPlaces=[];




        var api = {
           // searchPlace: searchPlace,
           // searchBusiness: searchBusiness,
           // placesWithSearchBox:placesWithSearchBox,
           // searchPlaces:searchPlaces,
           // searchResults:searchResults,
           // webSearch : webSearch,
           // newGoogle : newGoogle,
            initMap : initMap,
            render : render,
            initAutocomplete: initAutocomplete,
            searchPlaces : searchPlaces
        };
        return api;

        function initMap(search, callback){


            var pyrmont = {lat: 42.3342087, lng: -71.0924773};

            map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 15,
            });

            infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.textSearch({
                location: pyrmont,
                radius: 500,
                query: search
            }, callback);


        }

        function render(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });

        }


        function searchPlaces(query){
            console.log(query);
            return $http.get('/api/places/search?search='+query);

        }

        /*
         var myLatLng = {lat: -25.363, lng: 131.044};

         var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: myLatLng
         });

         var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Hello World!'
         });

         */

        function initAutocomplete(callback) {


        var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -33.8688, lng: 151.2195},
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
            });

            var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach(function(marker) {
                    marker.setMap(null);
                });
                markers = [];

                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));

                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
                callback(places);
            });


        }
         /*

        function searchPlace(query, callback) {



            var base_url = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8&query=";

            $http.get(base_url + query)
                .success(callback);

        }


        function searchResults(callback){
            callback(searchMyPlaces);
        }

        function webSearch(query, callback){

            var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza in boston&key=AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8&callback=JSON_CALLBACK';
            var key = 'AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8';
            //url.replace("QUERY_TO_SEARCH",query);

            $http.jsonp(url).success(callback);


        }

        function searchPlaces(query, callback){

            var map;
            var infowindow;
            var mainResults;


                var pyrmont = {lat: -33.867, lng: 151.195};

                map = new google.maps.Map(document.getElementById('map'), {
                    center: pyrmont,
                    zoom: 15
                });

                infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch({
                    location: pyrmont,
                    radius: 500,
                    type: ['store']
                }, callback1);


            function callback1(results, status) {
                mainResults=results;
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }

            function createMarker(place) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }

            callback(map);

    }

        function placesWithSearchBox (callback){
            var places;
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -33.8688, lng: 151.2195},
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });


            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });


            var markers = [];


            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function () {
                places = searchBox.getPlaces();


                if (places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];
                callback(places);
                // For each place, get the icon, name and location.

                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };


                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));

                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
            });


        }

        function searchBusiness(businessId, callback) {
            var base_url = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8&placeid=";
            $http.get(base_url + businessId)
                .success(callback);
        }

        function newGoogle(query, callback){
            var map;
            var service;
            var infowindow;

                if(query){
                    initialise();
                }

                function  initialise() {
                    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
                    console.log(1);
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: pyrmont,
                        zoom: 15
                    });

                    var request = {
                        location: pyrmont,
                        radius: '500',
                        query: query
                    };

                    service = new google.maps.places.PlacesService(map);

                    service.textSearch(request, mark);

                }

            function mark(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        createMarker(results[i]);
                    }
                }
                //callback(results,status);
            }
            function createMarker(place) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }




        }
        */
    }
})();
