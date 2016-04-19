(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('DestinationController', DestinationController);

    function DestinationController($scope, $rootScope, $location, DestinationService) {

        $scope.selIndex = null;
        $scope.scopeDestinationList = [];
        var currentUser = $rootScope.user;
        var currentUserDestinations = $scope.scopeDestinationList;


        function initialiseDestination() {
            //getUserDestination(currentUser._id);

            getAllDestination();
        }

        initialiseDestination();

        function getAllDestination() {

            DestinationService
                .findAllDestination()
                .then(function(response){
                    $scope.scopeDestinationList = response.data;

                });
        }

        function getUserDestination(userId) {

            DestinationService.findAllDestinationForUser(userId, function (response) {
                angular.copy(response, currentUserDestinations);
            });
        }

        $scope.addDestination = function (destination) {

            DestinationService.createDestinationForUser(
                currentUser._id,
                destination,
                function (response) {
                    currentUserDestinations.push(response);
                    $scope.destination = {};
                    $scope.selIndex = null;
                }
            )
        };

        $scope.updateDestination = function (destination) {


            DestinationService.updateDestinationById(destination._id, destination, function (response) {
                getUserDestination(currentUser._id);
            });
            $scope.destination={};
        };


        $scope.deleteDestination = function (destination) {


            DestinationService
                .deleteDestinationById(destination._id)
                .then(function (response){
                    $scope.scopeDestinationList= response.data;
                });
        };


        $scope.selectDestination = function (index) {
            $scope.selIndex = index;

            $scope.destination = {
                "_id": currentUserDestinations[index]._id,
                "name": currentUserDestinations[index].name,
                "userId": currentUserDestinations[index].userId
            };
        };


    }
})();

