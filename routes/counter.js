const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.get("/counter", (req, res) => {
  res.render("counter", { layout: false });
});
router.post("/counter", (req, res) => {
  console.log(req.body);
  res.render("counter", { layout: false, data: req.body });
});

module.exports = router;
