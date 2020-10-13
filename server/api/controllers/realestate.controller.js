const realestateDb = require('../db/realestate.db');

module.exports.findAll = async () => {
    const realestates = await realestateDb.findAll();

    return realestates.rows;
}

module.exports.findById = async (id) => {
    const realestate = await realestateDb.findById(id);

    return realestate;
}