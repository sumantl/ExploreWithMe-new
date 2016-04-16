(function() {
    angular
        .module("ExploreWithMeApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, $rootScope, UserService){

        var vm = this;
        $scope.allUsers =[];
        $scope.deleteUser = deleteUser;

        var user = $rootScope.user;


        function getAllUsers() {
            UserService
                .findAllUsers()
                .then(function (response) {
                    console.log("in admincontroller");
                    $scope.allUsers = response.data;
                });
        }

        getAllUsers();


        function deleteUser(user){
            console.log("deleting user");
            console.log(user);
            UserService
                .deleteUserById(user._id)
                .then( function (response){
                    getAllUsers();
                });
        }

    }

})();