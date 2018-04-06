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
        $("figure.col-md-8").each(function (i, element) {

            articles.title = $(this)
                .children("h2.a")
                .text();

            articles.summary = $(this)
                .children('p.a')
                .text();

            articles.link = $(this)
                .children("a")
                .attr("href");

            articles.date = $(this)
                .children("div.span")
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

