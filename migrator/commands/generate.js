const fs = require('fs');
const path = require('path');

const dirExists = async (dir) => {
	try {
		await fs.promises.access(dir);
		return true;
	} catch (err) {
		return false;
	}
};

const generateTemplateFile = (file, destination, up, down) => {
	const nextJS = `
const { sql } = require('slonik');

module.exports.up = sql\`
    ${up}
\`;

module.exports.down = sql\`
    ${down}
\`;
    `;

	fs.writeFileSync(path.join(destination, file), nextJS);

	console.log(`Stage template ${file} generated.`);
};

module.exports = async (argv) => {
	if (!(await dirExists(argv.S))) {
		await fs.promises.mkdir(argv.S);
	}

	argv.c.forEach((tableName) => {
		generateTemplateFile(
			`create_table_${tableName}.js`,
			argv.staged,
			`CREATE TABLE ${tableName}();`,
			`DROP TABLE ${tableName};`
		);
	});

	argv.a.forEach((tableName) => {
		generateTemplateFile(
			`alter_table_${tableName}.js`,
			argv.staged,
			`ALTER TABLE ${tableName}();`,
			`ALTER TABLE ${tableName};`
		);
	});

	argv.drop.forEach((tableName) => {
		generateTemplateFile(
			`drop_table_${tableName}.js`,
			argv.staged,
			`DROP TABLE ${tableName};`,
			`CREATE TABLE ${tableName}();`
		);
	});

	argv.s.forEach((tableName) => {
		generateTemplateFile(
			`seed_table_${tableName}.js`,
			argv.staged,
			`INSERT INTO ${tableName}() VALUES ();`,
			`DELETE FROM ${tableName} WHERE ? IN ();`
		);
	});

	argv.u.forEach((tableName) => {
		generateTemplateFile(
			`update_table_${tableName}.js`,
			argv.staged,
			`UPDATE ${tableName} SET WHERE;`,
			`UPDATE ${tableName} SET WHERE;`
		);
	});

	argv.d.forEach((tableName) => {
		generateTemplateFile(
			`delete_from_table_${tableName}.js`,
			argv.staged,
			`DELETE FROM ${tableName} WHERE ;`,
			`INSERT INTO ${tableName}() VALUES ();`
		);
	});
};
