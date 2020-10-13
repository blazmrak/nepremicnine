const db = require('./db');

module.exports.findAll = () => {
    return db.query(db.sql`SELECT * FROM realestate`);
}

module.exports.findById = async (id) => {
    try {
        return db.one(db.sql`SELECT * FROM realestate WHERE id=${id}`);
    } catch (err) {
        return null;
    }
}

module.exports.insert = (realestate) => {
    return db.insert('realestate', realestate);
}

module.exports.update = (condition, values) => {
    return db.updateOne('realestate', condition, values);
}

module.exports.deleteById = (id) => {
    return db.deleteById('realestate', id);
}