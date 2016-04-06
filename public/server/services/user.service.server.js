var userModel = require("../models/user.models.js")();

module.exports = function(app){

    app.get('/api/user', getUsers);
    app.get('/api/user?user=username&password=password', getUsers);

    app.post('/api/user', registerUser);
    app.delete('/api/user/:id', deleteUser);
    app.put('/api/user/:id', updateUser);

    function getUsers(req, res){
        if(req.query.username){
            if(req.query.password){
                var user = userModel.findUserByCredentials(req.query.username, req.query.password);
                res.json(user);
            }
            else{
                var user = userModel.findUserByUserName(req.query.username);
                res.json(user);
            }
        }
        else{
            var users = [];
            users = userModel.findAllUsers();
            res.json(users);
        }
    }

    function registerUser(req, res){
        var user = req.body;
        console.log(user);
        var newUser = userModel.createUser(user);
        console.log(newUser);
        res.json(newUser);
    }

    function deleteUser(req, res){
        var user = userModel.deleteUserById(req.params._id);
        res.json(user);
    }

    function updateUser(req, res){
        var user = req.body;
        console.log("update");
        console.log(user);
        console.log(req.params.id);
        var newUser = userModel.updateUserById(req.params.id, user);
        console.log("updated user");
        console.log(newUser);
        res.json(newUser);
    }
};