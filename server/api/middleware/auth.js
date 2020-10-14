const jwt = require('jsonwebtoken');

module.exports.loggedIn = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.status(401).json({ error: "You must be logged in to access this resource" });
        return;
    }

    try {
        jwt.verify(token, process.env.TOKEN_SECRET, {algorithms: ['HS256']});
    } catch(err) {
        res.status(401).json({ error: "JWT not valid" });
        return;
    }

    next();
}

module.exports.isRole = (role) => {
    return (req, res, next) => {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ error: "You must be logged in to access this resource" });
            return;
        }

        const user = jwt.verify(token, process.env.TOKEN_SECRET, {algorithms: 'HS256'});

        if(!role.includes(user.role)) {
            res.status(403).json({ error: `You must have role '${role}' to access this resource` });
            return;
        }

        next();
    }
}