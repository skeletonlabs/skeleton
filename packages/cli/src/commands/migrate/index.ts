import { program } from '../../internal/program.js';

program.command('migrate').action((migration) => {
	console.log(`Migration "${migration.name}" has not been implemented yet.`);
});
