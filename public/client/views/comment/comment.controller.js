(function(){
    angular
        .module("ExploreWithMeApp")
        .controller("CommentController", CommentController);

    function CommentController($scope, $rootScope, $location, $routeParams, CommentService) {

        $scope.commentList = [];
        var entity = $scope.entityId;
        var user = $rootScope.user;

        CommentService.findCommentByEntity(entity)
            .then(function(commentList) {
                $scope.commentList = commentList.data;
            });


        if(!user)
            user={"username" : "alice"};


        //var comment = {username : "Sumant", description : "Is it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it workingIs it working", days: "5"};
        //$scope.commentList.push(comment);

        $scope.addComment = addComment;

        function addComment(comment) {
            comment.entityId = entity;
            CommentService.createComment(user.username, comment)
                .then(function(response){
                    $scope.commentList.push(response.data);
                    console.log($scope.commentList);
                    $scope.comment ={};
                });
        }

    }

})();