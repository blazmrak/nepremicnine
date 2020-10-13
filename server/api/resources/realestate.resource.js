const express = require('express');
const router = express.Router();
const realestate = require('../controllers/realestate.controller')

router.get('/', async (req, res) => {
    const realestates = await realestate.findAll();

    res.status(200).json(realestates);
});

router.get('/:id', async (req, res) => {
    const realestates = await realestate.findById(req.params.id);

    if (!realestates) {
        res.status(404).json({ error: 'Realestate does not exist' });
        return;
    }

    res.status(200).json(realestates);
});

module.exports = router;