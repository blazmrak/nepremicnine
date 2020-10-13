const { createPool, sql } = require('slonik');

let pool;

const getPool = () => {
    if (pool) return pool;
    pool = createPool(process.env.DATABASE_URL);
    return pool;
};

module.exports.pool = getPool();

module.exports.query = getPool().query;

module.exports.sql = sql;

module.exports.insert = (table, record) => {
	const identifiers = Object.keys(record).map((key) => sql.identifier([key]));

	return getPool().query(sql`
        INSERT INTO ${sql.identifier([table])} 
        (${sql.join(identifiers, sql`, `)}) 
        VALUES 
        (${sql.join(Object.values(record), sql`, `)})
    `);
};

module.exports.updateOne = (table, condition, values) => {
    return getPool().query(sql`
    UPDATE TABLE ${sql.identifier([table])}
    SET ${sql.join(
        Object.entries(values).map(([key, value]) => sql`${sql.identifier([key])} = ${value}`),
        sql`,`
    )}
    WHERE ${sql.identifier([condition.name])} = ${condition.value}`);
}

module.exports.deleteById = (table, id) => {
	return getPool().query(sql`
        DELETE FROM ${sql.identifier([table])} 
        WHERE id = ${id}
    `);
};