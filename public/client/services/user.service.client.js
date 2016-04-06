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
            findUserByUserName: findUserByUserName

        };
        return api;


        function findUserByUserName(username){
            return $http.get('/api/user?username='+username);
        }

        function findUserByCredentials(username, password) {
            console.log("in user.sevice.client.js");
            return $http.get('/api/user?username='+username+'&password='+password);
            /*var result={};
            for(var i=0;i<userInfo.length;i++){
                if(userInfo[i].username==username&&userInfo[i].password==password) {
                    console.log("User Found");
                    angular.copy(userInfo[i], result);
                    console.log(result);
                    break;
                }
            }

            callback(result);
            */

        }

        function findAllUsers() {
            console.log("in user.service.client.js");
            return $http.get('/api/user');
        }

        function createUser(newUser) {
            console.log("In Create User");
            return $http.post('/api/user', newUser);
        }

            /*var tempUser ={}
             angular.copy(user,tempUser);
             tempUser._id = (new Date).getTime();
             userInfo.push(tempUser);
             callback(tempUser);
             */

        function deleteUserById(userId) {
            console.log("in user.service.client.js");
            return $http.delete("/api/user" + userId);
        }
        /*
            for(var i=0;i<userInfo.length;i++){
                if(userInfo[i]._id == userId){
                    userInfo.splice(i,1);
                    break;
                }
            }
            callback(userInfo);
           */


        function updateUser(userId, user) {
            console.log("in user.service.client.js");
            return $http.put("/api/user/" + userId, user);
        }
        /*
             var result = null;
            for(var i=0;i<userInfo.length;i++){

                if(userInfo[i]._id == userId){
                    angular.copy(user,userInfo[i]);
                    angular.copy(userInfo[i],result);
                    break;
}
            }
            callback(result);

            */

    }
})();