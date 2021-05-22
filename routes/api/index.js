const router = require("express").Router();
const scanRoutes = require("./scan");

router.use("/scan", scanRoutes);

module.exports = router;