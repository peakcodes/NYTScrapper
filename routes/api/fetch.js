var Router = require(express).router();
var fetchController = require("../../controllers/fetch");

router.get("/fetch", fetchController.scrapeHeadline);

module.exports = router;