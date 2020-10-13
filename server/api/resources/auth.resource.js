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

    const token = credentials.token;
    delete credentials['token'];

    res.cookie('token', token, { httpOnly: true, sameSite: 'Strict' }).status(200).json(credentials);
});

router.post('/logout', async (req, res) => {
    res.clearCookie("token").status(200).json({ message: 'Logout successful' });
})

module.exports = router;