(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('UserDetailController', UserDetailController);

    function UserDetailController($scope, $rootScope, UserService){

        $scope.allUsers =[];

        function getAllUsers() {
            UserService.findAllUsers(function (response) {
                console.log("Return list of all users");
                $scope.allUsers = response;
            });
        }

        getAllUsers();

    }
});
