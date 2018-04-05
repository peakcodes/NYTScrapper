var mongoose = require("mongoose");

// Save reference for schema conductor

var Schema = mongoose.schema;

// Create new schema for articles

var articleSchema = new Schema ({

    Title: {
        type: String,
        required: true
    },

    Link: {
        type: String,
        required: true,
    },

    Summary: {
        type: String,
        default: "Summary not available"
    },

    ArticleDate: {
        type: Date,
        required: true,
    },

    Status: {
        type: String,
        defualt: "Save Article"
    },

    isSaved: {
        type: boolean,
        default: false
    },

    Note: {
        type: String,
        default: Schema.Type.ObjectId
    }

})

// Pass data into articles variable

var Articles = mongoose.model("articles", articleSchema);

// Export module
module.export = Articles;