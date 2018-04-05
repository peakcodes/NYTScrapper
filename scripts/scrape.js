// Routes
// Scrapping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Get route to pull headlines from bitcoin website
var scrape = function () {

    // Grab html request
    return axios.get("http://news.bitcoin.com/").then(function (response) {
        // Load into cheerio and pushh data into shorthand selector which is designed
        var $ = cheerio.load(response.data);
        // storing article data into empty array
        var articles = []

        // Now, we grab every h2 within an article tag, and do the following:
        $("div.post-module-thumb").each(function (i, element) {

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .children("a")
                .text();

            result.summary = $(this)
                .children('a')
                .text();

            result.link = $(this)
                .children("a")
                .attr("href");

            result.date = $(this)
                .children("a")
                .text()

            if (title && summary && data) {

                // need reg ex stuff to clean things up

                var dataToAdd = {
                    headline: title,
                    summary: summary,
                    url: link,
                    date: date
                }

                articles.push(dataToAdd)

            }
        })
        // Save an empty result object
        return articles
    })
};
module.exports = scrape;

