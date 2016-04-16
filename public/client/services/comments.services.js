(function(){
    angular
        .module("ExploreWithMeApp")
        .factory("CommentService", CommentService);

    function CommentService ($http) {



        var api = {
            createComment: createComment,
            findAllCommentForUser: findAllCommentForUser,
            deleteCommentById: deleteCommentById,
            findCommentByEntity : findCommentByEntity,
            findAllComments : findAllComments,
            updateCommentById: updateCommentById
        };
        return api;


        function findCommentByEntity(entityId){

            return $http.get("/api/comment/:"+entityId);
        }

        function findAllComments(){
            return $http.get('/api/comment');
        }


        function createComment(username, comment) {
            var tempComment ={};
            angular.copy(comment,tempComment);
            tempComment.username = username;
            console.log("comment");
            console.log(tempComment);

            return $http.post("/api/comment", tempComment);


        }

        function findAllCommentForUser(userId, callback) {
            var userCommentsList=[];
            for(var i = 0; i<commentsList.length; i++){
                if(commentsList[i].userId == userId){
                    userCommentsList.push(commentsList[i]);
                }
            }
            callback(userCommentsList);
        }

        function deleteCommentById(commentId) {

            return $http.delete('/api/comment/'+commentId);
        }

        function updateCommentById (commentId, newComment, callback){
            var result=null;
            for(var i=0;i<commentsList.length;i++){
                if(commentsList[i]._id == commentId){

                    angular.copy(newComment,commentsList[i]);
                    angular.copy(commentsList[i],result);
                    break;
                }
            }
            callback(result);
        }
    }

})();

