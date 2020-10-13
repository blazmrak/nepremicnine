const db = require('./db');

module.exports.findAll = () => {
    return db.query(db.sql`SELECT * FROM client`)
}

module.exports.findById = async (id) => {
    try {
        return db.one(db.sql`SELECT * FROM client WHERE id=${id}`);
    } catch (err) {
        return null;
    }
}

module.exports.findByUsername = (username) => {
    try {
        return db.one(db.sql`SELECT * FROM client WHERE username=${username}`);
    } catch (err) {
        return null;
    }
}

module.exports.insert = (user) => {
    return db.insert('client', user);
}

module.exports.update = (condition, values) => {
    return db.updateOne('client', condition, values);
}

module.exports.deleteById = (id) => {
    return db.deleteById('client', id);
}