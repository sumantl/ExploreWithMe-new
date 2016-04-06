(function(){
    angular
        .module('ExploreWithMeApp')
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/admin", {
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/friend", {
                    templateUrl: "views/users/friend.view.html",

                })
                .when("/profile", {
                    templateUrl: "views/users/myprofile.view.html",
                    controller: "ProfileController"
                })
                .when("/profile/:username", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileFriendController"
                })
                .when("/logout", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/search", {
                    templateUrl: "views/search/search.view.html",
                    controller: "PlaceController"
                })
                .when("/userdetils", {
                    templateUrl: "views/admin/user.details.html",
                    controller: "UserDetailController"
                })
                .when("/restaurants", {
                    templateUrl: "views/admin/restaurants.view.html"
                })
                .when("/recipe", {
                    templateUrl: "views/admin/recipe.view.html"
                })
                .when("/itinerary", {
                    templateUrl: "views/admin/itinerary.view.html"
                })
                .when("/destination", {
                    templateUrl: "views/admin/destination.view.html"
                })
                .when("/comments", {
                    templateUrl: "views/admin/comments.view.html"
                })
                .when("/food", {
                    templateUrl: "views/search/food.view.html",
                    controller: "FoodSearchController"
                })
                .when("/food/:query", {
                    templateUrl: "views/search/food.view.html",
                    controller: "FoodSearchController"
                })
                .when("/detail/:foodId", {
                    templateUrl: "views/search/food.detail.view.html",
                    controller: "FoodDetailController"
                })
                .when("/placedetail/:placeId", {
                    templateUrl: "views/search/place.detail.view.html",
                    controller: "PlaceDetailController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();
