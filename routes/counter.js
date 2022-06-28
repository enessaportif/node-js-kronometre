const path = require('path');

const express = require('express');

const router = express.Router();

router.use('/counter', (req, res, next) => {

  res.sendFile(path.join(__dirname, '../', 'views', 'counter.html'));

});

module.exports = router;