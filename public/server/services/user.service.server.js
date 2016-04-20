var passport      = require('passport');
var LocalStrategy    = require('passport-local').Strategy;


module.exports = function(app, userModel){


    var auth = authorized;

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    app.post('/api/login',    passport.authenticate('local'), login);
    app.get('/api/loggedin', loggedin);
    app.post  ('/api/register', register);

    app.get('/api/user',getUsers);
    app.get('/api/user/:id',findUserById);
    app.post('/api/user', createUser);
    app.put('/api/user/:id',updateUser);
    app.delete('/api/user/:id',deleteUserById);


    function register(req, res) {

        var tempUser = req.body;

        userModel
            .findUserByUserName(tempUser.username)
            .then(function (user) {
                    if (user) {
                        res.json(null);
                    }
                    else {
                        console.log(user);
                        return userModel.createUser(tempUser);

                    }
                },
                function (err) {
                    res.status(400).send(err);
                }
            )
            .then(
                function (user) {
                    if (user) {
                        req.login(user, function (err) {
                            if (err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }


    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if (!user) {
                        return done(null, false);
                    }
                    return done(null, user);
                },
                function(err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }



    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }


    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    }

    function getUsers(req, res){
        if(req.query.username) {
            if (req.query.password) {
                userModel
                    .findUserByCredentials(req.query.username, req.query.password)
                    .then(function (user){
                        res.json(user);
                    });
            }
            else {

                if(req.query.flag) {
                    userModel
                        .searchUserByUserName(req.query.username)
                        .then(function (userList) {
                            res.json(userList)
                        });
                }
                else
                    findUserByUserName(req.query.username, res)
            }
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