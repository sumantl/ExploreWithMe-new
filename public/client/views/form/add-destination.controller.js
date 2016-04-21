(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('AddDestinationController',AddDestinationController);

    function AddDestinationController($scope, $rootScope, $location, DestinationService) {


        console.log("In add-destination-controller");
        var userId = $rootScope.user_id;
        console.log("In add-destination-controller");

        $scope.addDestination = function(destination) {

            DestinationService
                .createDestinationForUser(userId, destination)
                .then(function (response){

                    $scope.destination={};
                    $scope.success=true;
                });
        }
    }

})();
