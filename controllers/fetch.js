var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
    scrapedHeadlines: function (req, res) {
        // scrap btc
        return scrape().then(function (articles) {
            // insert articles into db
            return db.Headline.create(articles)
        }).then(function (dbHeadline) {
            if (dbHeadline.length === 0) {
                res.json({
                    message: "no new articles"
                })
            }
            else {
                res.json({
                    message: "Added New Articles!"
                })
            }
        }).catch(function (err) {
            res.json({
                message: "Scape Complete"
            })
        })
    }
}

