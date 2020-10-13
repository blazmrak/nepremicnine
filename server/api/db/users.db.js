const db = require('./db');

module.exports.findAll = () => {
    return db.query(db.sql`SELECT * FROM client`)
}

module.exports.findById = (id) => {
    return db.query(db.sql`SELECT * FROM client WHERE id=${id}`)
}

module.exports.findByUsername = (username) => {
    return db.query(db.sql`SELECT * FROM client WHERE username=${username}`)
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