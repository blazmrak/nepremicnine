
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    CREATE TABLE IF NOT EXISTS realestate
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
        address character varying(64) NOT NULL,
        lat double precision NOT NULL,
        lng double precision NOT NULL,
        picture character varying(254) NOT NULL,
        capacity integer NOT NULL,
        price double precision NOT NULL,
        PRIMARY KEY (id)
    );
`);
module.exports.down = runSql(sql`
    DROP TABLE IF EXISTS realestate;
`);
    