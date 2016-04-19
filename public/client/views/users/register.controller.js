(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('RegisterController',RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService) {

        $scope.register=function(user){

            user.roles=[];
            user.roles.push('admin');

            UserService.register(user)
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
