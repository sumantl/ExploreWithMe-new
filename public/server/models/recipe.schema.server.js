module.exports = function (mongoose) {

    var recipeSchema = mongoose.Schema({
            "userId": String,
            "name": String,
            "ingredients": String,
            "description": String,
            "prepTime": String,
            "flag": Boolean
        }, {collection: "recipe"}
    );

    return recipeSchema;

};