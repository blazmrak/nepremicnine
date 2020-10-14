const dbUser = require('../db/users.db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user) => {
    return jwt.sign({
        id: user.id,
        username: user.username,
        role: user.role
    }, process.env.TOKEN_SECRET, {
        algorithm: 'HS256'
    });
}

module.exports.login = async (user) => {
    if(!user.password || !user.username) {
        return null;
    }

    const registeredUser = await dbUser.findByUsername(user.username);

    if(!registeredUser) {
        return null;
    }
    
    const validPassword = await bcrypt.compare(user.password, registeredUser.password);

    if (!validPassword) {
        return null;
    }

    delete registeredUser['password']

    return {
        token: createToken(registeredUser),
        user: registeredUser
    }
}