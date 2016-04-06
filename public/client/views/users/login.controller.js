(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('LoginController',LoginController);

    function LoginController($scope, $rootScope, $location, UserService) {

        $scope.login=function(user){

            UserService
                .findUserByCredentials(user.username, user.password)
                .then(function(response){
                    console.log("res "+response.data.username);
                    var empty={};
                    if (response.data.username == null){
                        $location.path('/login');
                        console.log("Login Failed");
                    }
                    else{
                        $rootScope.user=response.data;
                        $location.path('/profile');
                        console.log("Logged IN");
                    }
                });

        }
    };
})();
