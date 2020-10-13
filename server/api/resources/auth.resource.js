const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller')

router.post('/login', async (req, res) => {
    const credentials = await auth.login(req.body);

    if (!credentials) {
        res.status(401).json({
            context: {
                body: req.body
            },
            error: 'Wrong username or password'
        });
        return;
    }

    res.cookie('token', credentials.token).status(200).json(credentials);
});

module.exports = router;