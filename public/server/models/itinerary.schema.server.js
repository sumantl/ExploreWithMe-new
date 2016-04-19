module.exports = function(mongoose){

    var itinerarySchema = mongoose.Schema({
            "userId" : String,
            "name" : String,
            "origin" : String,
            "duration" : String,
            "cost" : String,
            "description" : String,
            "flag" : Boolean
        },
        { collection : "itinerary"}
    );

    return itinerarySchema;
};

