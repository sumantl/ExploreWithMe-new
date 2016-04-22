(function(){
    angular
        .module('ExploreWithMeApp')
        .config(configuration);


    function configuration($routeProvider){
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
                controller: "AdminController",
                resolve: {
                    loggedin: checkAdmin
                }
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
                controller: "ProfileController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/profile/:username", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileFriendController",
                resolve: {
                    loggedin: checkLoggedin
                }
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
                controller: "RecipeSearchController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/recipe-detail/:recipeId", {
                templateUrl: "views/search/recipe-detail.view.html",
                controller: "RecipeDetailController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/search-restaurant", {
                templateUrl: "views/search/restaurant-search.view.html",
                controller: "RestaurantSearchController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/search-destination", {
                templateUrl: "views/search/destination-search.view.html",
                controller: "DestinationSearchController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/destination-detail/:destinationId", {
                templateUrl: "views/search/destination-detail.view.html",
                controller: "DestinationDetailController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/search-itinerary", {
                templateUrl: "views/search/itinerary-search.view.html",
                controller: "ItinerarySearchController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/itinerary-detail/:itineraryId", {
                templateUrl: "views/search/itinerary-detail.view.html",
                controller: "ItineraryDetailController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })

            .when("/search-user", {
                templateUrl: "views/search/user-search.view.html",
                controller: "UserSearchController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/restaurant-detail/:restaurantId", {
                templateUrl: "views/search/restaurant-detail.view.html",
                controller: "RestaurantDetailController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/userdetils", {
                templateUrl: "views/admin/user-search.view.html",
                controller: "UserDetailController",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/restaurants", {
                templateUrl: "views/admin/restaurants.view.html",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/recipe", {
                templateUrl: "views/admin/recipe.view.html",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/add-recipe", {
                templateUrl: "views/form/add-recipe.view.html",
                controller : "AddRecipeController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/add-destination", {
                templateUrl: "views/form/add-destination.view.html",
                controller : "AddDestinationController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/add-itinerary", {
                templateUrl: "views/form/add-itinerary.view.html",
                controller : "AddItineraryController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/add-restaurant", {
                templateUrl: "views/form/add-restaurant.view.html",
                controller : "AddRestaurantController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/itinerary", {
                templateUrl: "views/admin/itinerary.view.html",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/destination", {
                templateUrl: "views/admin/destination.view.html",
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .when("/comments", {
                templateUrl: "views/admin/comments.view.html",
                resolve: {
                    loggedin: checkAdmin
                }
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
                controller: "FoodDetailController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when("/placedetail/:placeId", {
                templateUrl: "views/search/place.detail.view.html",
                controller: "PlaceDetailController",
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .otherwise({
                redirectTo: "/home"
            });
    }


    var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        $http.get('/api/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            console.log(user);
            if (user !== '0' && user.roles.indexOf('admin') != -1)
            {
                $rootScope.user = user;
                deferred.resolve();
            }
        });

        return deferred.promise;
    };


    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();

        console.log("inside checkLoggedin:::::::::::::::::::::::::::::::::");

        $http.get('/api/loggedin').success(function(user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0')
            {
                console.log(user);
                $rootScope.user = user;
                deferred.resolve();
            }
            // User is Not Authenticated
            else
            {
                console.log(user);
                $rootScope.errorMessage = 'You need to log in.';
                deferred.reject();
                $location.url('/login');
            }
        });

        return deferred.promise;
    };


})();
