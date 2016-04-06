(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('ItineraryController', ItineraryController);

    function ItineraryController($scope, $rootScope, $location, ItineraryService) {

        $scope.selIndex = null;
        $scope.scopeItineraryList = [];
        var currentUser = $rootScope.user;
        var currentUserItinerarys = $scope.scopeItineraryList;


        function initialiseItinerary() {
            getUserItinerary(currentUser._id);
        }

        initialiseItinerary();


        function getUserItinerary(userId) {

            ItineraryService.findAllItineraryForUser(userId, function (response) {
                angular.copy(response, currentUserItinerarys);
            });
        }

        $scope.addItinerary = function (itinerary) {

            ItineraryService.createItineraryForUser(
                currentUser._id,
                itinerary,
                function (response) {
                    currentUserItinerarys.push(response);
                    $scope.itinerary = {};
                    $scope.selIndex = null;
                }
            )
        };

        $scope.updateItinerary = function (itinerary) {


            ItineraryService.updateItineraryById(itinerary._id, itinerary, function (response) {
                getUserItinerary(currentUser._id);
            });
            $scope.itinerary={};
        };


        $scope.deleteItinerary = function (index) {


            ItineraryService.deleteItineraryById(currentUserItinerarys[index]._id, function (response) {
                getUserItinerary(currentUser._id);
            });
            $scope.itinerary={};
        };


        $scope.selectItinerary = function (index) {
            $scope.selIndex = index;

            $scope.itinerary = {
                "_id": currentUserItinerarys[index]._id,
                "name": currentUserItinerarys[index].name,
                "userId": currentUserItinerarys[index].userId
            };
        };


    }
})();

