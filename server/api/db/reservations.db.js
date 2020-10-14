const db = require('./db');

module.exports.findAll = () => {
    return db.query(db.sql`
            SELECT r.id, r.id_client, r.id_realestate, date_from, date_to, address, username 
            FROM reservation r 
            JOIN client c ON c.id = r.id_client
            JOIN realestate re ON re.id = r.id_realestate
    `);
}

module.exports.findById = async (id) => {
    try {
        return db.one(db.sql`
                SELECT r.id, r.id_client, r.id_realestate, date_from, date_to, address, username 
                FROM reservation r 
                JOIN client c ON c.id = r.id_client
                JOIN realestate re ON re.id = r.id_realestate
                WHERE r.id=${id}
        `);
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