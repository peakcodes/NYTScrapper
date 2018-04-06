var mongoose = require("mongoose");

// Save reference for schema conductor

var Schema = mongoose.schema;

// Create new schema for articles

const articleSchema = new Schema({

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
        default: "Date not available"
    },

    Status: {
        type: String,
        defualt: "Save Article"
    },

    isSaved: {
        type: Boolean,
        default: false
    },

    // Note: {
    //     type: String,
    //     default: Schema.Note.ObjectId
    // }

})

// Pass data into articles variable

var Article = mongoose.model("articles", articleSchema);

// Export module
module.export = Article;