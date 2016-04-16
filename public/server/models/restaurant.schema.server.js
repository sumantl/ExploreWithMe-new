module.exports = function (mongoose) {

    var restaurantSchema = mongoose.Schema({
            "userId": String,
            "name": String,
            "address": String,
            "phone": String,
            "url": String,
            "flag": Boolean
        }, {collection: "restaurant"}
    );

    return restaurantSchema;

};
