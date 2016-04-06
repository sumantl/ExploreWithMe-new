(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('MainController',MainController);

    function MainController($scope, $rootScope, $location) {
        $scope.$location = $location;
        $rootScope.searchCount=0;
        $rootScope.googleSearch=[];
    }

})();
