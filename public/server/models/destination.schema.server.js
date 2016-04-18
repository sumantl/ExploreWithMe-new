module.exports = function(mongoose){

    var destinationSchema = mongoose.Schema({
            "userId" : String,
            "name" : String,
            "adress" : String,
            "zipcode" : String,
            "description" : String,
            "ttd" : String,
            "flag" : Boolean
        },
        { collection : "destination"}
    );

    return destinationSchema;
};
