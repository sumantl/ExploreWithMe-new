var q = require("q");
var uuid = require('node-uuid');

module.exports = function(db, mongoose) {

    var userSchema = require('./user.schema.server.js')(mongoose);

    var User = mongoose.model("user", userSchema);


    var api = {
        findUserByCredentials: findUserByCredentials,
        findAllUsers: findAllUsers,
        createUser: createUser,
        deleteUserById: deleteUserById,
        updateUser: updateUser,
        findUserByUserName: findUserByUserName,
        findUserById : findUserById,
        searchUserByUserName: searchUserByUserName
    };
    return api;




    function findUserByCredentials(username, password) {

        var deferred = q.defer();

        User.findOne(
            {'username': username, 'password' : password },
            function(err, user){
                deferred.resolve(user);
            });
        return deferred.promise;
    }


    function findUserById(userId){
        var deferred = q.defer();

        User.findOne({'_id': userId},
            function(err, user){
                deferred.resolve(user);
            });
        return deferred.promise;

    }


    function findUserByUserName(userName) {

        var deferred = q.defer();

        User.findOne(
            {'username': userName},
            function(err, user){
                deferred.resolve(user);
            });
        return deferred.promise;
    }


    function searchUserByUserName(userName) {

        var deferred = q.defer();

        User.find(
            {'username': new RegExp(userName,'i')},'username',
            function(err, user){
                deferred.resolve(user);
            });
        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

        User.find(
            function(err, userList){
                deferred.resolve(userList);
            });
        return deferred.promise;
    }

    function createUser(user) {

        var deferred = q.defer();

        User.create(user,
            function(err, user){
                deferred.resolve(user);
            });
        return deferred.promise;
    }

    function deleteUserById(userId) {
        var deferred = q.defer();


        console.log(userId);
        User.remove({'_id':userId},
            function(err, message){
                deferred.resolve(message);
            });
        return deferred.promise;

    }

    function updateUser(userId, user) {

        var deferred = q.defer();
        delete user._id;

        console.log(userId);

        User.update(
            {'_id' : userId},
            {$set : user},
            function(err, update){
                if(err){
                    console.log("error updating");
                    console.log(err);
                    deferred.reject(err);
                }
                else{

                    console.log("success");
                    console.log(update);
                    deferred.resolve(update);
                }
            }
        );
        return deferred.promise;
    }

};

