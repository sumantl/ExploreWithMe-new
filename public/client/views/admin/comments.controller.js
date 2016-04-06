(function() {
    angular
        .module('ExploreWithMeApp')
        .controller('CommentController', CommentController);

    function CommentController($scope, $rootScope, $location, CommentService) {

        $scope.selIndex = null;
        $scope.scopeCommentList = [];
        var currentUser = $rootScope.user;
        var currentUserComments = $scope.scopeCommentList;


        function initialiseComment() {
            getUserComment(currentUser._id);
        }

        initialiseComment();


        function getUserComment(userId) {

            CommentService.findAllCommentForUser(userId, function (response) {
                angular.copy(response, currentUserComments);
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


        $scope.deleteComment = function (index) {


            CommentService.deleteCommentById(currentUserComments[index]._id, function (response) {
                getUserComment(currentUser._id);
            });
            $scope.comment={};
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

