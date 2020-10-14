
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    CREATE TABLE IF NOT EXISTS reservation
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 ),
        id_realestate integer NOT NULL,
        id_client integer NOT NULL,
        date_from date NOT NULL,
        date_to date NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (id_client)
            REFERENCES client (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID,
        FOREIGN KEY (id_realestate)
            REFERENCES realestate (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
            NOT VALID
    );
`);
module.exports.down = runSql(sql`
    DROP TABLE IF EXISTS reservation;
`);
    