
module.exports = function(app, userModel){
    app.get('/api/user',getUsers);
    app.get('/api/user/:id',findUserById);
    app.post('/api/user', createUser);
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
                findUserByUserName(req.query.username, res)
        }
        else{
            userModel.findAllUsers()
                .then(function (userList){
                   res.json(userList);
                });

        }
    }

    function  deleteUserById(req, res){
        userModel
            .deleteUserById(req.params.id)
            .then(function (response){
                res.json(response);
            });

    }

    function findUserByUserName(username, res){
        userModel
            .findUserByUserName(username)
            .then(function (response){
                res.json(response);
            });

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