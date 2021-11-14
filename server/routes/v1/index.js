const express = require('express');
const fooRoute = require('./foo.route');

const router = express.Router();

router.use('/foo', fooRoute);

module.exports = router;
