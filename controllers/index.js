var express = require('express');
var router = express.Router();

router.use('/api/animals', require('./animals'));

module.exports = router;