#!/usr/bin/env node
import { program } from 'commander';
import { migrate } from './commands/migrate';

program.name('Skeleton');
program.description('A CLI tool for Skeleton related functionality');
program
	.command('migrate')
	.action(migrate)
	.argument('<migration>', 'Migration to run')
	.option('-c, --cwd <cwd>', 'The current working directory');
program.parse(process.argv);
