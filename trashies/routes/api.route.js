var express = require('express');

var router = express.Router();
var contests = require('./api/contest.routes');

router.use('/contests', contests);

module.exports = router;