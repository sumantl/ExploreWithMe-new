(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('ProfileController',ProfileController);

    function ProfileController($scope, $rootScope, $location, UserService) {

        $scope.update=function(user){

            var userId=$rootScope.user._id;
            UserService.updateUser(userId, user)
                .then(function(response){
                    console.log(response.data);

                    $rootScope.user=response.data;
                    console.log("Profile");
                    $location.path('/profile');
                }
            );
        }



    };

})();
