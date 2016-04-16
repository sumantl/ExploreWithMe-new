(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('AdminCommentController', AdminCommentController);

    function AdminCommentController($scope, $rootScope, $location, CommentService) {

        $scope.selIndex = null;
        $scope.scopeAdminCommentList = [];
        var currentUser = $rootScope.user;
        var commentList = $scope.scopeAdminCommentList;


        function initialiseComment() {
            getAllComments();
        }

        initialiseComment();


        function getAllComments() {

            CommentService
                .findAllComments()
                .then(function (response){
                    console.log(response);

                    $scope.scopeAdminCommentList = response.data;

                });

        }

        $scope.addComment = function (comment) {

            CommentService.createCommentForUser(
                currentUser._id,
                comment,
                function (response) {
                    currentUserComments.push(response);
                    $scope.comment = {};
                    $scope.selIndex = null;
                }
            )
        };

        $scope.updateComment = function (comment) {


            CommentService.updateCommentById(comment._id, comment, function (response) {
                getUserComment(currentUser._id);
            });
            $scope.comment={};
        };


        $scope.deleteComment = function (comment) {


            CommentService
                .deleteCommentById(comment._id)
                .then(function (response){
                    getAllComments();
                });
            //$scope.comment={};
        };


        $scope.selectComment = function (index) {
            $scope.selIndex = index;

            $scope.comment = {
                "_id": currentUserComments[index]._id,
                "name": currentUserComments[index].name,
                "userId": currentUserComments[index].userId
            };
        };


    }
})();

