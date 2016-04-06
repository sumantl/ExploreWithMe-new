(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('RegisterController',RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register=function(user){

            UserService.createUser(user)
                .then(function(response){
                    console.log(response.data);
                    $rootScope.user=response.data;
                    console.log($rootScope.user);
                    $location.path('/profile');
                }
            );
        }
    };

})();
