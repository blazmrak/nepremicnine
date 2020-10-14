const reservationDb = require('../db/reservations.db');

module.exports.findAll = async () => {
    const realestates = await reservationDb.findAll();
    
    return realestates.rows;
}

module.exports.insert = async (reservation) => {
    const id = await reservationDb.insert(reservation);

    return id.rows[0];
}