module.exports = function (app, db ,mongoose){



    var userModel = require("./models/user.model.server.js")(db, mongoose);



    var userService = require("./services/user.service.server.js")(app, userModel);
    var yelp = require("./services/yelp.service.server.js")(app);
    var places = require("./services/places.service.server.js")(app);


};