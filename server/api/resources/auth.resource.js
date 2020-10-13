const express = require('express');
const router = express.Router();
const login = require('../controllers/login.controller')

router.post('/login', async (req, res) => {
    const credentials = await login.login(req.body);

    if (!credentials) {
        res.status(401).json({
            context: {
                body: req.body
            },
            error: 'Wrong username or password'
        });
        return;
    }

    res.status(200).json(credentials);
});

module.exports = router;