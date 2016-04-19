(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("DestinationSearchController", DestinationSearchController);

    function DestinationSearchController($http, $scope, $rootScope, $location, $routeParams, DestinationService) {


        $scope.search = search;


        function search(destination) {


            DestinationService
                .findDestinationByName(destination.name)
                .then(function(response){
                    $scope.searchDestinationList = response.data;
                    console.log($scope.searchDestinationList);
                });
        }
    }
})();