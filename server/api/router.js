const express = require('express');
const router = express.Router();
const authResource = require('./resources/auth.resource');
const realestateResource = require('./resources/realestate.resource');

router.use('/auth', authResource);
router.use('/realestates', realestateResource);


module.exports = router;