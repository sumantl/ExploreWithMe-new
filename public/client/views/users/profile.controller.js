(function(){
    angular
        .module('ExploreWithMeApp')
        .controller('ProfileFriendController',ProfileFriendController);

    function ProfileFriendController($scope, $rootScope, $routeParams, $location, UserService) {

        var userId = $routeParams.userId;
        console.log(username);

        UserService.findUserById(username)
            .then(function(response){
                console.log(response.data);
                $scope.friend = response.data;
            })




    };

})();
