#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const options = yargs
	.usage('Usage: <command> [...options]')
	.command(
		'new',
		'Generate staged js files for next migration.',
		(yargs) => {
			return yargs;
		},
		(argv) => {
			require('./commands/new')(argv);
		}
	)
	.command(
		'generate',
		'Generate js files to be staged for next migration.',
		(yargs) => {
			return yargs
				.option('c', {
					array: true,
					alias: 'create',
					describe: 'Names of tables to be created.',
					default: [],
				})
				.option('a', {
					array: true,
					alias: 'alter',
					describe: 'Names of tables to be altered.',
					default: [],
				})
				.option('drop', {
					array: true,
					describe: 'Names of tables to be dropped.',
					default: [],
				})
				.option('s', {
					array: true,
					alias: 'seed',
					describe: 'Names of tables to be seeded.',
					default: [],
				})
				.option('u', {
					array: true,
					alias: 'update',
					describe: 'Names of tables to be updated.',
					default: [],
				})
				.option('d', {
					array: true,
					alias: 'delete',
					describe: 'Names of tables to have data deleted.',
					default: [],
				});
		},
		(argv) => {
			require('./commands/generate')(argv);
		}
	)
	.option('S', {
		alias: 'staged',
		description: 'Directory of staged migration files',
		default: path.join(process.cwd(), 'migrations-staged'),
	})
	.option('M', {
		alias: 'migration-dir',
		description: 'Directory of migration files',
		default: path.join(process.cwd(), 'migrations'),
	}).argv;
