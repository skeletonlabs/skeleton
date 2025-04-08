#!/usr/bin/env node
import { intro, log, outro } from '@clack/prompts';
import { migrate } from './commands/migrate';
import { bgBlueBright, bgGreenBright, black, dim, red } from 'colorette';
import { Command } from 'commander';
import { getOurPackageJson } from './utility/get-our-package-json';

const pkg = await getOurPackageJson();

const cli = new Command()
	.name(pkg.name)
	.description(pkg.description)
	.version(pkg.version)
	.addCommand(migrate)
	.copyInheritedSettings(migrate)
	.configureOutput({
		writeOut: log.info,
		writeErr(str) {
			outro(red(str.replace('\n', ' ')));
			process.exit(1);
		}
	})
	.hook('preAction', (_, ctx) => {
		const args = ctx.args.join(' ');
		log.message(dim(`Running "${`${ctx.name()}${args ? ` ${args}` : ''}`}"...`));
	});

async function main() {
	intro(bgBlueBright(black(' Welcome to the Skeleton CLI 💀 ')));
	if (process.argv.length === 2) {
		cli.error('error: no command provided');
	}
	await cli.parseAsync(process.argv);
	outro(bgGreenBright(black(' All Done! ')));
}

await main();

export { cli };
