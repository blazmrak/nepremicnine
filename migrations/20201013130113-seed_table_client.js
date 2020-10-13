
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    INSERT INTO client(username, password, role) VALUES ('test', 'testis', 'user');
    INSERT INTO client(username, password, role) VALUES ('admin', 'admin', 'admin');
`);
module.exports.down = runSql(sql`
    DELETE FROM client WHERE username IN ('test', 'admin');
`);
    