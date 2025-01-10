#!/usr/bin/env node
import { Command, program } from 'commander';
import { intro, log, outro} from '@clack/prompts';
import { getPackage } from "./internal/get-package.js";
import { migrate } from "./commands/migrate/index.js";
import {bgBlue, bgGreen, bgRed, black, bold, red } from 'colorette';

/**
 * Info
 */
const pkg = await getPackage();
program.name(pkg.name);
program.description(pkg.description);
program.version(pkg.version);


/**
 * Commands
 */
program.addCommand(migrate);
program.addCommand(new Command('init').action(() => {}));

/**
 * Configuration
 */
program.hook('postAction', () => {
	outro(bgGreen(bold(' All done! ')));
});
program.configureOutput({
	writeOut: log.info,
	writeErr(str) {
		log.error(red(bold(str)));
		outro(bgRed(black(bold(` Exiting due to error `))));
		process.exit(1);
	},
});

/**
 * Parse
 */
intro(bgBlue(black(bold('Welcome to the Skeleton CLI'))));
program.parse(process.argv);


