var express = require('express')
var router = express.Router()

router.use('/youtube', require('./ybController'));
router.use('/db', require('./dbController'));

module.exports = router;
