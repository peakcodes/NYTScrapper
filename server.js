var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var handlebars = require("handlebars");
var exphbs = require("handlebars-express");

// Scrapping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
const app = express();
var db = require("./models");

var PORT = 3000;

// establishing view engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(logger("dev"));


// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

// Routes
// Get route to pull headlines from blockchain website
app.get("/scrape", function(req, res) {
// Grab html request
  axios.get("http://coindesk.com/").then(function(response) {
    // Load into cheerio and pushh data into shorthand selector which is designed
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("post-info h3").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });

    // If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
  });
});

// Route for getting all Articles from the db
app.get("/articles", function(req, res) {
  // TODO: Finish the route so it grabs all of the articles
});

// Route for grabbing a specific Article by id, populate it with it's note
app.get("/articles/:id", function(req, res) {
  // TODO
  // ====
  // Finish the route so it finds one article using the req.params.id,
  // and run the populate method with "note",
  // then responds with the article with the note included
});

// Route for saving/updating an Article's associated Note
app.post("/articles/:id", function(req, res) {
  // TODO
  // ====
  // save the new note that gets posted to the Notes collection
  // then find an article from the req.params.id
  // and update it's "note" property with the _id of the new note
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
