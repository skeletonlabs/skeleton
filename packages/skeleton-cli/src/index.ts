#!/usr/bin/env node
import { intro, log, outro } from '@clack/prompts';
import { migrate } from './commands/migrate/index.js';
import { bgBlueBright, bgGreenBright, black, dim, red } from 'colorette';
import { program } from 'commander';

/**
 * Info
 */
program.name('@skeletonlabs/skeleton-cli');
program.description('The CLI for Skeleton relating tooling.');

/**
 * Configuration
 */
program.configureOutput({
	writeOut: log.info,
	writeErr(str) {
		outro(red(str.replace('\n', ' ')));
		process.exit(1);
	}
});
program.addHelpText('afterAll', () => {
	outro(bgGreenBright(black(' All Done! ')));
	return '';
});
program.hook('preAction', (_, ctx) => {
	const args = ctx.args.join(' ');
	log.info(dim(`Running "${`${ctx.name()}${args ? ` ${args}` : ''}`}"...`));
});
program.hook('postAction', (_, ctx) => {
	const args = ctx.args.join(' ');
	log.success(dim(`Finished "${`${ctx.name()}${args ? ` ${args}` : ''}`}"`));
});

/**
 * Commands
 */
program.addCommand(migrate);
migrate.copyInheritedSettings(program);

/**
 * Parse
 */
intro(bgBlueBright(black(' Welcome to the Skeleton CLI 💀 ')));
if (process.argv.length === 2) {
	program.error('error: no command provided');
}
await program.parseAsync(process.argv);
outro(bgGreenBright(black(' All Done! ')));
