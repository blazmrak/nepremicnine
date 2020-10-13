
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    INSERT INTO client(username, password, role) VALUES ('admin', '$2b$10$gt1W7Pp5k38Rspo.YVl7HOycsLnqpMAPPQuTP2TefVau93lRHRdLC', 'admin');
    INSERT INTO client(username, password, role) VALUES ('test', '$2b$10$AmXj9Q78eFlCmXQCkET6/.Hg9WR/ru5fIE6mp8bbWFu4FWZx9UUP6', 'user');
`);
module.exports.down = runSql(sql`
    DELETE FROM client WHERE username IN ('test', 'admin');
`);
    