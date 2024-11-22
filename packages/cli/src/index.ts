import { Command } from 'commander';
import migrate from './commands/migrate/migrate.js';

const program = new Command();

// Info
program.name('Skeleton');
program.description('A CLI tool for Skeleton related functionality');

// Commands
program.command('migrate').action(migrate).argument('<migration>', 'Migration to run');

program.parse(process.argv);
