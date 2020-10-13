const db = require('./db');

module.exports.findAll = () => {
    return db.query(db.sql`SELECT * FROM reservation`);
}

module.exports.findById = async (id) => {
    try {
        return db.one(db.sql`SELECT * FROM reservation WHERE id=${id}`);
    } catch (err) {
        return null;
    }
}

module.exports.insert = (reservation) => {
    return db.insert('reservation', reservation);
}

module.exports.update = (condition, values) => {
    return db.updateOne('reservation', condition, values);
}

module.exports.deleteById = (id) => {
    return db.deleteById('reservation', id);
}