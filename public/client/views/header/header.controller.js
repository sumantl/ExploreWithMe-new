(function(){
    angular
        .module('ExploreWithMeApp')
        .controller("HeaderController", HeaderController);

    function HeaderController($scope,$rootScope, UserService) {

        $scope.logout = logout;

        function logout(){


            UserService
                .logout()
                .then (function(response){
                    $rootScope.user=null;
                });
        }


    }
})();