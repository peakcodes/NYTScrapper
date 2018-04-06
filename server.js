// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var handlebars = require("handlebars");
var exphbs = require("express-handlebars");

// Require all models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");
var routes = require("./routes");
const app = express();

var PORT = process.env.PORT || 3000;

// App configuration
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(routes);


// // Hook mongojs configuration to the db variable
// var db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Set up Mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
var db = mongoose.connect; 
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
