(function(){
    angular
        .module('ExploreWithMeApp')
        .controller("HeaderController", HeaderController);

    function HeaderController($scope,$rootScope) {

        $scope.logout = logout;

        function logout(){

            $rootScope.user=null;
        }


    }
})();