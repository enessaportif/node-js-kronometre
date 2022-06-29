const express = require('express');

const router = express.Router();

router.use('/timer', (req, res, next) => {

  res.render("timer",{layout:false});

});

module.exports = router;