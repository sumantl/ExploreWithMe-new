module.exports = function (mongoose) {

    var userSchema = mongoose.Schema({
            "_id" : String,
            "username": String,
            "password": String,
            "firstName": String,
            "lastName": String,
            "email": [String],
            "roles": [String],
            "friends": [String]
        }, {collection: "user"}
    );

    return userSchema;

};