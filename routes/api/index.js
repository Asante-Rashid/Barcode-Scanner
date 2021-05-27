const router = require("express").Router();
const scanRoutes = require("./scan");
const googleRoutes = require("./google-search");

router.use("/history", scanRoutes);
router.use("/google", googleRoutes);

module.exports = router;