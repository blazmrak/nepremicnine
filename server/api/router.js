const express = require('express');
const router = express.Router();
const authResource = require('./resources/auth.resource');
const realestateResource = require('./resources/realestate.resource');
const reservationsResource = require('./resources/reservations.resource');

const auth = require('./middleware/auth')

router.use('/auth', authResource);
router.use('/realestates', realestateResource);
router.use('/reservations', auth.loggedIn, reservationsResource);


module.exports = router;