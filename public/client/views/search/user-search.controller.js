(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("UserSearchController", UserSearchController);

    function UserSearchController($http, $scope, $rootScope, $location, $routeParams, UserService) {


        $scope.searchUser = searchUser;
        $scope.followUser = followUser;
        var currentUser = $rootScope.user;


        function searchUser(user) {

            UserService
                .searchUserByUserName(user.username)
                .then(function(response){

                    $scope.searchUserList = response.data;
                });
        }

        function followUser(user){

            currentUser.friends.push(user.username);

            UserService
                .updateUser(currentUser._id, currentUser)
                .then(function (response){

                    $rootScope.user=response.data;

                });
        }
    }
})();