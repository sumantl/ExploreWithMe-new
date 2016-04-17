
module.exports = function(app, commentModel){

    app.post('/api/comment', createComment);
    app.get('/api/comment', getComments);
    app.get('/api/comment/:entityId', getCommentByEntity)
    app.delete('/api/comment/:commentId', deleteCommentById);


    function getCommentByEntity(req, res){
        commentModel
            .getCommentByEntity(req.params.entityId)
            .then(function(response){
                res.json(response);
        });
    }

    function deleteCommentById(req, res){
        commentModel
            .deleteCommentById(req.params.commentId)
            .then(function(response){
                res.json(response);

            });
    }


    function getComments(req, res){
        commentModel
            .getAllComments()
            .then(function (commentList){
                res.json(commentList);
            })
    }

    function createComment(req, res) {
        commentModel.createComment(req.body)
            .then(function (comment) {
                res.json(comment);
            });

    }









};