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

                .when("/search-recipe", {
                    templateUrl: "views/search/recipe-search.view.html",
                    controller: "RecipeSearchController"
                })
                .when("/recipe-detail/:recipeId", {
                    templateUrl: "views/search/recipe-detail.view.html",
                    controller: "RecipeDetailController"
                })

                .when("/userdetils", {
                    templateUrl: "views/admin/user-detail.view.html",
                    controller: "UserDetailController"
                })
                .when("/restaurants", {
                    templateUrl: "views/admin/restaurants.view.html"
                })
                .when("/recipe", {
                    templateUrl: "views/admin/recipe.view.html"
                })
                .when("/add-recipe", {
                    templateUrl: "views/form/add-recipe.view.html",
                    controller : "AddRecipeController"
                })
                .when("/add-destination", {
                    templateUrl: "views/form/add-destination.view.html",
                    controller : "AddDestinationController"
                })
                .when("/add-itinerary", {
                    templateUrl: "views/form/add-itinerary.view.html",
                    controller : "AddItineraryController"
                })
                .when("/add-restaurant", {
                    templateUrl: "views/form/add-restaurant.view.html",
                    controller : "AddRestaurantController"
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
