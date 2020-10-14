const express = require('express');
const router = express.Router();
const reservationCtrl = require('../controllers/reservations.controller')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.get('/', auth.isRole(['admin']), async (req, res) => {
    const reservations = await reservationCtrl.findAll();

    res.status(200).json(reservations);
});

router.post('/', async (req, res) => {
    const token = req.cookies.token;
    const user = jwt.verify(token, process.env.TOKEN_SECRET, {algorithms: 'HS256'});
    const reservation = {
        id_client: user.id,
        date_from: req.body.from,
        date_to: req.body.to,
        id_realestate: req.body.id_realestate
    }

    await reservationCtrl.insert(reservation);

    res.status(201).json(null);
});

module.exports = router;