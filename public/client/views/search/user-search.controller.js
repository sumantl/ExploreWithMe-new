(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("UserSearchController", UserSearchController);

    function UserSearchController($http, $scope, $rootScope, $location, $routeParams, UserService) {


        $scope.searchUser = searchUser;
        $scope.followUser = followUser;
        var currentUser = $rootScope.user;



        function searchUser(user) {
            $scope.userAdded = false;

            UserService
                .searchUserByUserName(user.username)
                .then(function(response){
                    console.log(response);


                    for(var i in response.data){
                        if(response.data[i].username == currentUser.username){
                            response.data.splice(i,1);
                        }
                    }




                    $scope.searchUserList = response.data;
                    $scope.tempUser={};
                });
        }

        function followUser(user){
            $scope.tempUser={};

            if(currentUser.friends.indexOf(user.username)<0) {
                currentUser.friends.push(user.username);
                UserService
                    .updateUser(currentUser._id, currentUser)
                    .then(function (response) {
                        $location.path('/friend');

                    });
            }
            else{
                $scope.userAdded = true;


            }
        }
    }
})();