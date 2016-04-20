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
            register : register,
            searchUserByUserName: searchUserByUserName

        };
        return api;

        function searchUserByUserName(username){
            return $http.get('/api/user?flag=true&username='+username);
        }

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

            return $http.get('/api/user?username='+username+'&password='+password);

        }

        function findAllUsers() {

            return $http.get('/api/user');
        }

        function createUser(newUser) {

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