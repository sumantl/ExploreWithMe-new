
module.exports = function(app, userModel){
    app.get('/api/user',getUsers);
    app.get('/api/user/:id',findUserById);
    app.post('/api/user', createUser);

    app.get('/api/user?username=username',getUsers);
    app.get( '/api/user?username=alice&password=wonderland',getUsers);
    app.put('/api/user/:id',updateUser);
    app.delete('/api/user/:id',deleteUserById);

    function getUsers(req, res){
        if(req.query.username) {
            if (req.query.password) {
                userModel
                    .findUserByCredentials(req.query.username, req.query.password)
                    .then(function (user){
                        res.json(user);
                    });
            }
            else
                res.json(findUserByUserName(req.query.username));
        }
        else
            res.json(userAccess.findAllUsers());
    }

    function  deleteUserById(req, res){
        res.json(userAccess.deleteUserById(req.params.id))

    }

    function findUserByUserName(username){
        return (userAccess.findUserByUserName(username));

    }


    function  createUser(req, res){
        var tempUser = req.body;
        userModel
            .createUser(tempUser)
            .then(function (user){
                res.json(user);
            });

        //
        // res.json(userAccess.creatUser(tempUser));

    }

    function findUserByCredentials(username, password){
        return (userAccess.findUserByCredentials(username, password));
    }

    function updateUser(req, res){
        console.log(35445);
        console.log(tempUser);
        var tempUser = req.body;
        console.log(req.params.id);
        console.log(tempUser);
        userModel
            .updateUser(req.params.id, tempUser)
            .then(function (updatedUser){
                console.log(updatedUser);
                res.json(updatedUser);
            });


    }

    function findUserById(req, res){

        res.json(userAccess.findUserById(req.params.id));

    }



};