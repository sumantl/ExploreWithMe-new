(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("DestinationDetailController", DestinationDetailController);

    function DestinationDetailController($scope, $rootScope, $location, $routeParams, DestinationService) {

        $scope.entityId = $routeParams.destinationId;

        DestinationService
            .findDestinationById($scope.entityId)
            .then(function (destination) {
                console.log(destination);
                $scope.destinationDetail = destination.data;
            });
    }

})();