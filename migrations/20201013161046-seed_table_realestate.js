
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    INSERT INTO realestate(address, lat, lng, picture, capacity, price) VALUES ('Vodnikova cesta 96, 1000 Ljubljana', 46.069169, 14.483651, '', 3, 50.00);
    INSERT INTO realestate(address, lat, lng, picture, capacity, price) VALUES ('Kal nad Kanalom 13, 5214 Kal nad Kanalom', 46.079410, 13.716738, '', 6, 30.99);
`);
module.exports.down = runSql(sql`
    DELETE FROM realestate WHERE address IN ('Vodnikova cesta 96, 1000 Ljubljana', 'Kal nad Kanalom 13, 5214 Kal nad Kanalom');
`);
    