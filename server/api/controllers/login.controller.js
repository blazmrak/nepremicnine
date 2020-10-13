const dbUser = require('../db/users.db');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({
        id: user.id,
        username: user.username
    }, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: 60 * 60,
    });
}

const createRefreshToken = (user) => {
    return jwt.sign({
        id: user.id
    }, process.env.REFRESH_SECRET, {
        algorithm: 'HS256'
    });
}

module.exports.login = async (user) => {
    const registeredUser = await dbUser.findByUsername(user.username);

    if (registeredUser.password != user.password) {
        return null;
    }

    return {
        token: createToken(registeredUser),
        refresh: createRefreshToken(registeredUser)
    }
}