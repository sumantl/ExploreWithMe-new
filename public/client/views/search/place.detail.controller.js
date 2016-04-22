(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("PlaceDetailController", PlaceDetailController);

    function PlaceDetailController($scope, $rootScope, $location, $routeParams, GooglePlaces) {

        $scope.entityId = $routeParams.placeId;
        console.log($scope.entityId);

        GooglePlaces
            .getDetail($scope.entityId)
            .then(function (response){
                console.log(response.data.result);
                $scope.placeDetail = response.data.result;

            });
    }



})();