module.exports = function (mongoose) {

    var commentSchema = mongoose.Schema({
            "_id": String,
            "username": String,
            "entityId": String,
            "description": String,
            "flag": Boolean,
            "date" : { type: Date, default: Date.now }
        }, {collection: "comment"}
    );

    return commentSchema;

};