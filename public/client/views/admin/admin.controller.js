(function() {
    angular
        .module("ExploreWithMeApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, $rootScope, UserService){

        $scope.allUsers =[];

        function getAllUsers() {
            UserService.findAllUsers(function (response) {
                console.log("in admincontroller");
                $scope.allUsers = response;
            });
        }

        getAllUsers();

    }

})();