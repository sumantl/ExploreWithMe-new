/*(function() {
 angular
 .module("ExploreWithMeApp")
 .factory("GooglePlaces", GooglePlaces);

 function GooglePlaces($http, $q) {

 var searchMyPlaces=[];




 var api = {
 initAutocomplete: initAutocomplete,
 searchPlaces : searchPlaces
 };
 return api;



 function searchPlaces(query){
 console.log(query);
 return $http.get('/api/places/search?search='+query);

 }


 function initAutocomplete() {
 var deferred = $q.defer();
 var initialLocation;


 var map = new google.maps.Map(document.getElementById('map'), {
 zoom: 13,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 });

 if(navigator.geolocation) {
 var browserSupportFlag = true;
 navigator.geolocation.getCurrentPosition(function(position) {
 initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
 map.setCenter(initialLocation);
 }, function() {
 handleNoGeolocation(browserSupportFlag);
 });
 }
 // Browser doesn't support Geolocation
 else {
 browserSupportFlag = false;
 handleNoGeolocation(browserSupportFlag);
 }

 function handleNoGeolocation(errorFlag) {
 if (errorFlag == true) {
 console.log("Geolocation service failed.");

 initialLocation = {lat: 22.7196, lng: 75.857};
 } else {
 console.log("Your browser doesn't support geolocation. We've placed you in Siberia.");
 initialLocation = {lat: 22.7196, lng: 75.857};
 }
 map.setCenter(initialLocation);
 }

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
 console.log(1);
 deferred.resolve(places);


 });

 return deferred.promise;
 }

 }
 })();

 */


(function() {
    angular
        .module("ExploreWithMeApp")
        .factory("GooglePlaces", GooglePlaces);

    function GooglePlaces($http, $q) {

        var searchMyPlaces=[];




        var api = {
            initAutocomplete: initAutocomplete,
            searchPlaces : searchPlaces,
            getDetail : getDetail,
        };
        return api;


        function getDetail(placeId){
            return $http.get('/api/places/'+placeId);
        }

        function searchPlaces(query){
            console.log(query);
            return $http.get('/api/places/search?search='+query);

        }


        function initAutocomplete(places1) {
            var deferred = $q.defer();
            var initialLocation;


            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            if(navigator.geolocation) {
                var browserSupportFlag = true;
                navigator.geolocation.getCurrentPosition(function(position) {
                    initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                    map.setCenter(initialLocation);
                }, function() {
                    handleNoGeolocation(browserSupportFlag);
                });
            }
            // Browser doesn't support Geolocation
            else {
                browserSupportFlag = false;
                handleNoGeolocation(browserSupportFlag);
            }

            function handleNoGeolocation(errorFlag) {
                if (errorFlag == true) {
                    console.log("Geolocation service failed.");

                    initialLocation = {lat: 22.7196, lng: 75.857};
                } else {
                    console.log("Your browser doesn't support geolocation. We've placed you in Siberia.");
                    initialLocation = {lat: 22.7196, lng: 75.857};
                }
                map.setCenter(initialLocation);
            }


            var input = document.getElementById('inputQuery');
            var searchBox = new google.maps.places.SearchBox(input);
            //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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
            });
        }

    }
})();
