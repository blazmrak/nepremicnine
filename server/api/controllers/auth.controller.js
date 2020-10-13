const dbUser = require('../db/users.db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user) => {
    return jwt.sign({
        id: user.id,
        username: user.username
    }, process.env.TOKEN_SECRET, {
        algorithm: 'HS256'
    });
}

module.exports.login = async (user) => {
    const registeredUser = await dbUser.findByUsername(user.username);

    const validPassword = await bcrypt.compare(user.password, registeredUser.password);

    if (!validPassword) {
        return null;
    }

    return {
        token: createToken(registeredUser)
    }
}