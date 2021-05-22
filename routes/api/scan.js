const router = require("express").Router();
const scanController = require("../../controllers/scanController");

// Matches with /api/scan
router.route("/")
.get(scanController.findAll)
.post(scanController.create)
.
// Matches with /api/scan/:id
router
.route("/:id")
.get(scanController.findById)
.put(scanController.update)
.delete(scanController.remove);

module.exports = router;

