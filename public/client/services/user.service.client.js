(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("UserService", UserService);

    function UserService ($http, $rootScope) {

        var api = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            findUserByUserName: findUserByUserName,
            login: login,
            register : register

        };
        return api;

        function register(user){
            return $http.post('/api/register',user);
        }

        function login(user){
            return $http.post('/api/login',user);
        }


        function findUserByUserName(username){
            return $http.get('/api/user?username='+username);
        }

        function findUserByCredentials(username, password) {
            console.log("in user.sevice.client.js");
            return $http.get('/api/user?username='+username+'&password='+password);

        }

        function findAllUsers() {
            console.log("in user.service.client.js");
            return $http.get('/api/user');
        }

        function createUser(newUser) {
            console.log("In Create User");
            return $http.post('/api/user', newUser);
        }



        function deleteUserById(userId) {
            console.log("User Delete");
            return $http.delete("/api/user/" + userId);
        }



        function updateUser(userId, user) {
            console.log("in user.service.client.js");
            return $http.put("/api/user/" + userId, user);
        }


    }
})();