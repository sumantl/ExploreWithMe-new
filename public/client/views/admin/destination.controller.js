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
            getUserDestination(currentUser._id);
        }

        initialiseDestination();


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


        $scope.deleteDestination = function (index) {


            DestinationService.deleteDestinationById(currentUserDestinations[index]._id, function (response) {
                getUserDestination(currentUser._id);
            });
            $scope.destination={};
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

