import { Command } from 'commander';
import migrate from './commands/migrate/migrate.js';

const program = new Command();

program.name('Skeleton CLI');

program
	.command('migrate')
	.description('Migrate Skeleton projects from one version to another')
	.argument('<string>', 'migration')
	.action(migrate);

program.parse(process.argv);
