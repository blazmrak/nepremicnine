
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql`
    INSERT INTO client(username, password, role) VALUES ('admin', '$2b$10$gt1W7Pp5k38Rspo.YVl7HOycsLnqpMAPPQuTP2TefVau93lRHRdLC', 'admin');
    INSERT INTO client(username, password, role) VALUES ('test', '$2b$10$DqjfqFY9de8nS57hGMZ4bOK7uxRMD0hxwmef.lOQ9DBBo8S3QvBjW', 'user');
`);
module.exports.down = runSql(sql`
    DELETE FROM client WHERE username IN ('test', 'admin');
`);
    