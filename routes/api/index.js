var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./note");
var headlineRoutes = require("./headline");

router.use("/fetch", fetchRoutes);
router.use("/note", noteRoutes);
router.use("/headline", headlineRoutes);

module.exports = router;