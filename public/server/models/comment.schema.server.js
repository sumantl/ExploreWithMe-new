module.exports = function (mongoose) {

    var commentSchema = mongoose.Schema({
            "_id": String,
            "username": String,
            "entityId": String,
            "description": String,
            "flag": Boolean
        }, {collection: "comment"}
    );

    return commentSchema;

};