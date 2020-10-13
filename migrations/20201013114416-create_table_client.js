
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    CREATE TABLE IF NOT EXISTS client
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
        username character varying(64) NOT NULL,
        password character varying(254) NOT NULL,
        role character varying(32) NOT NULL,
        PRIMARY KEY (id)
    );
`);
module.exports.down = runSql(sql`
    DROP TABLE IF EXISTS client;
`);
    