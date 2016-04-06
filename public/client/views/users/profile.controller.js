(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('ProfileFriendController',ProfileFriendController);

    function ProfileFriendController($scope, $rootScope, $routeParams, $location, UserService) {

        var username = $routeParams.username;
        console.log(username);

        UserService.findUserByUserName(username)
            .then(function(response){
                console.log(response.data);
                $scope.friend = response.data;
            })




    };

})();
