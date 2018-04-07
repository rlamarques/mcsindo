var express = require('express')
var router = express.Router()

router.use('/youtube', require('./ybController'));

module.exports = router;
