const fs = require('fs');
const path = require('path');

const validateSQL = (sql) => {
	if (!sql || sql.sql == '') {
		throw new Error('Query must not be empty.');
	}

	if (!sql.type || sql.type != 'SLONIK_TOKEN_SQL') {
		throw new Error('Query must be constructed using sql tagged template literal.');
	}
};

const generateFile = (source, file, destination) => {
	const next = require(path.join(source, file));

	try {
		validateSQL(next.up);
		validateSQL(next.down);
	} catch (err) {
		throw new Error(`Generation of stage ${file} failed: ${err}`);
	}

	const nextJS = `
const { sql } = require('slonik');
const { runSql } = require('../migrator/migratorUtil');

module.exports.up = runSql(sql\`${next.up.sql}\`);
module.exports.down = runSql(sql\`${next.down.sql}\`);
    `;

	const fileName = `${new Date(Date.now())
		.toISOString()
		.replace(/[-TZ:.]/g, '')
		.slice(0, 14)}-${file}.js`;

	fs.writeFileSync(path.join(destination, fileName), nextJS);
	fs.unlinkSync(path.join(source, file + '.js'));

	console.log(`Stage ${file} generated.`);
};

module.exports = async (argv) => {
	fs.readdirSync(argv.staged, { withFileTypes: true })
		.filter((fd) => fd.isFile())
		.map((fd) => fd.name.split('.')[0])
		.filter((file) => file != 'template')
		.forEach((file) => {
			generateFile(argv.staged, file, argv.migrationDir);
		});

	fs.promises.rmdir(argv.S);
};
