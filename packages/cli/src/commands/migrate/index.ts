import { program } from '../../internal/program.js';

program
	.command('migrate')
	.action((migration) => {
			console.log(migration);
	});
