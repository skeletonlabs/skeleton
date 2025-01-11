#!/usr/bin/env node
import { intro, log, outro } from '@clack/prompts';
import { migrate } from './commands/migrate/index.js';
import { bgBlueBright, bgGreenBright, black, dim, red } from 'colorette';
import { Command } from 'commander';

const cli = new Command()
	/**
	 * Info
	 */
	.name('@skeletonlabs/skeleton-cli')
	.description('The CLI for Skeleton relating tooling.')
	/**
	 * Commands
	 */
	.addCommand(migrate)
	.copyInheritedSettings(migrate)
	/**
	 * Configuration
	 */
	.configureOutput({
		writeOut: log.info,
		writeErr(str) {
			outro(red(str.replace('\n', ' ')));
			process.exit(1);
		}
	})
	.addHelpText('afterAll', () => {
		outro(bgGreenBright(black(' All Done! ')));
		return '';
	})
	.hook('preAction', (_, ctx) => {
		const args = ctx.args.join(' ');
		log.info(dim(`Running "${`${ctx.name()}${args ? ` ${args}` : ''}`}"...`));
	})
	.hook('postAction', (_, ctx) => {
		const args = ctx.args.join(' ');
		log.success(dim(`Finished "${`${ctx.name()}${args ? ` ${args}` : ''}`}"`));
	});

/**
 * Run CLI
 */
intro(bgBlueBright(black(' Welcome to the Skeleton CLI 💀 ')));
if (process.argv.length === 2) {
	cli.error('error: no command provided');
}
await cli.parseAsync(process.argv);
outro(bgGreenBright(black(' All Done! ')));

export { cli };
