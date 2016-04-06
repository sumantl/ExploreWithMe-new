var users = require("./user.mock.json");

module.exports = function(){

    var api = {
        findUserByCredentials: findUserByCredentials,
        findAllUsers: findAllUsers,
        createUser: createUser,
        deleteUserById: deleteUserById,
        updateUserById: updateUserById,
        findUserByUserName: findUserByUserName
    };
    return api;

    function  findUserByUserName(username){
        for (index in users){
            if (users[index].username == username){
                return users[index];
            }
        }
    }
    function findUserByCredentials(username, password){
        console.log("in user.model.js--------user: "+username+"password: "+password);
        for(user in users){
            if(users[user].username==username && users[user].password==password)
                return users[user];
        }
        return null;
    }

    function findAllUsers(){
        console.log("in user.models.js");
        return users;
    }

    function createUser(newUser){
        console.log("in user.model.js");
        newUser._id = (new Date).getTime();
        users.push(newUser);
        return newUser;
    }

    function deleteUserById(userId){
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
        console.log("in user.model.js");
        for(user in users){
            if(users[user]._id==userId){
                users[user].firstName = user.firstName;
                users[user].lastName = user.lastName;
                users[user].username = user.username;
                users[user].password = user.password;
                users[user].role = user.role;
            }
        }
        return preUser;
    }
};
