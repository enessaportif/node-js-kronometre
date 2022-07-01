const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();

router.get("/stopwatch", (req, res) => {
  res.render("stopwatch", {layout:false});
});

router.post("/stopwatch", (req, res) => {
  res.render("stopwatch", { layout: false, data: req.body });
});

module.exports = router;