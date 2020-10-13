const express = require('express');
const router = express.Router();
const authResource = require('./resources/auth.resource');

router.use('/auth', authResource);


module.exports = router;