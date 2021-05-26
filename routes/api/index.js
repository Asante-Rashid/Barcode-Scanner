const router = require("express").Router();
const scanRoutes = require("./scan");

router.use("/history", scanRoutes);

module.exports = router;