const express = require('express');

const router = express.Router();

router.use('/counter', (req, res) => {
  
  res.render("counter",{layout:false});

});

module.exports = router;