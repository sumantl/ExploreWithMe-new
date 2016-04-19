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
            getAllItinerary();
        }

        initialiseItinerary();


        function getAllItinerary() {

            ItineraryService
                .findAllItinerary()
                .then(function(response){
                    $scope.scopeItineraryList = response.data;

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


        $scope.deleteItinerary = function (itinerary) {


            ItineraryService
                .deleteItineraryById(itinerary._id)
                .then(function (response){
                $scope.scopeItineraryList= response.data;
            });
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

