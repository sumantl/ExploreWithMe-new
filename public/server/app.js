module.exports = function (app, db ,mongoose, passport, cookieParser, session){



    var userModel = require("./models/user.model.server.js")(db, mongoose);

    var commentModel = require("./models/comment.model.server.js")(db, mongoose);

    var recipeModel = require("./models/recipe.model.server.js")(db, mongoose);

    var restaurantModel = require("./models/restaurant.model.server.js")(db, mongoose);

    var destinationModel = require("./models/destination.model.server.js")(db, mongoose);

    var itineraryModel = require("./models/itinerary.model.server.js")(db, mongoose);


    var userService = require("./services/user.service.server.js")(app, userModel);
    var yelp = require("./services/yelp.service.server.js")(app);
    var places = require("./services/places.service.server.js")(app);
    var comments = require("./services/comment.service.server.js")(app, commentModel);

    var recipe = require("./services/recipe.service.server.js")(app, recipeModel);

    var restaurant = require("./services/restaurant.service.server.js")(app, restaurantModel);

    var destination = require("./services/destination.service.server.js")(app, destinationModel);

    var itinerary = require("./services/itinerary.service.server.js")(app, itineraryModel);


};