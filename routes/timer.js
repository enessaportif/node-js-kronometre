const path = require('path');

const express = require('express');

const router = express.Router();

router.use('/timer', (req, res, next) => {

  res.sendFile(path.join(__dirname, '../', 'views', 'timer.html'));

});

module.exports = router;