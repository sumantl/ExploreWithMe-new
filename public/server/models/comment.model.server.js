var q = require("q");
var uuid = require('node-uuid');

module.exports = function(db, mongoose) {

    var commentSchema = require('./comment.schema.server.js')(mongoose);

    var Comment = mongoose.model("comment", commentSchema);


    var api = {
        findCommentByUserName: findCommentByUserName,
        getAllComments: getAllComments,
        findCommentsByEntity :findCommentsByEntity,
        createComment: createComment,
        deleteCommentById: deleteCommentById,

    };
    return api;

    function findCommentsByEntity(){

    }



    function findCommentByUserName(username, password) {

        var deferred = q.defer();

        User.findOne(
            {'username': username, 'password' : password },
            function(err, user){
                deferred.resolve(user);
            });
        return deferred.promise;
    }


function getAllComments() {
        var deferred = q.defer();

        Comment.find(
            function(err, commentList){
                deferred.resolve(commentList);
            });
        return deferred.promise;
    }

    function createComment(comment) {

        comment._id = uuid.v1();

        var deferred = q.defer();

        Comment.create(comment,
            function(err, comment){
                deferred.resolve(comment);
            });
        return deferred.promise;
    }

    function deleteCommentById(commentId) {
        var deferred = q.defer();

        Comment.remove({'_id':commentId},
            function(err, result){
                deferred.resolve(result);
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

