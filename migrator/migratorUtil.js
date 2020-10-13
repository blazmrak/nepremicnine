const adaptSqlString = (sql, values) => {
    values.forEach((v, i) => {
        sql = sql.replace(`\$${i+1}`);
    })

    return sql;
}

module.exports.runSql = (sql) => {
    if(!sql.type || sql.type != 'SLONIK_TOKEN_SQL') {
        throw new Error('Query must be constructed using sql tagged template literal.');
    }

    const adaptedSql = adaptSqlString(sql.sql, sql.values);

    return (db) => {
        return db.runSql(adaptedSql, sql.values);
    };
}
