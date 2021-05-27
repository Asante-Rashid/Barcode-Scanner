const axios = require("axios");
const router = require("express").Router();

router.get("/google", (req, res) => {
  axios
    .get("https://www.google.com/search?q=", { params: req.query }, "&tbm=shop")
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
