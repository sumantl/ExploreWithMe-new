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
        findUserById : findUserById
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


    function searchUser(userName) {

        var deferred = q.defer();

        User.find(
            {'username': new RegExp(userName,'i')},
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

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
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
                }
            }
        );
        return deferred.promise;
    }

};

    /*

    function  findUserByUserName(username){
        for (index in users){
            if (users[index].username == username){
                return users[index];
            }
        }
    }
    function findUserByCredentials(username, password){

        var user;
        console.log("in user.model.js--------user: "+username+"password: "+password);
        for(user in users){
            if(users[user].username==username && users[user].password==password)
                return users[user];
        }
        return null;
    }

    function findAllUsers(){
        console.log("in user.model.server.js");
        return users;
    }

    function createUser(newUser){
        console.log("in user.model.js");
        newUser._id = (new Date).getTime();
        users.push(newUser);
        return newUser;
    }

    function deleteUserById(userId){
        var user;
        console.log("in user.model.js");
        for(user in users){
            if(users[user]._id==userId){
                users.splice(user,1);
                break;
            }
        }
        return users;
    }

    function updateUserById(userId, preUser){
        var user;
        console.log("in user.model.js");
        for(user in users){
            if(users[user]._id==userId){
                users[user].firstName = preUser.firstName;
                users[user].lastName = preUser.lastName;
                users[user].username = preUser.username;
                users[user].password = preUser.password;
                users[user].roles = preUser.roles;
                users[user].friends = preUser.friends;
                users[user].email = preUser.email;
                return preUser;
            }
        }
        return null;


    }
};

        */