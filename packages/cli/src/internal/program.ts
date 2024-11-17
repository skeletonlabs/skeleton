import { Command } from 'commander';
import { getPackage } from './utilities/get-package.js';

const pkg = getPackage();

const program = new Command()
	.name('Skeleton')
	.description('A CLI tool for Skeleton related functionality')
	.version(String(pkg?.version ?? '0.0.0'));

export { program };
