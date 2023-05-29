import { fileURLToPath } from 'url';
import { cancel, isCancel } from '@clack/prompts';
import path from 'path';
import fs from 'fs-extra';

export function whichPMRuns() {
	const userAgent = process.env.npm_config_user_agent;
	if (!userAgent) {
		return undefined;
	}
	const pmSpec = userAgent.split(' ')[0] || '';
	const separatorPos = pmSpec.lastIndexOf('/');
	const name = pmSpec?.substring(0, separatorPos);
	return {
		name: name === 'npminstall' ? 'cnpm' : name,
		version: pmSpec?.substring(separatorPos + 1),
	};
}

/** @param {string} dir */
export function mkdirp(dir) {
	try {
		fs.mkdirSync(dir, { recursive: true });
	} catch (e) {
		if (e.code === 'EEXIST') return;
		throw e;
	}
}

export function dist(pathToFind) {
	let pathAdjust = '';
	let base = fileURLToPath(new URL(`./`, import.meta.url).href);
	if (base.endsWith('shared', base.length - 1)) {
		pathAdjust = '../';
	}

	const res = path.resolve(base, pathAdjust, pathToFind);
	return res;
}

export function removeFilesExceptSync(directoryPath, filesToKeep) {
	const files = fs.readdirSync(directoryPath);
	const filesToRemove = files.filter((file) => !filesToKeep.includes(file));
	for (const file of filesToRemove) {
		const filePath = path.join(directoryPath, file);
		fs.removeSync(filePath);
	}
}

export function goodbye(option) {
	if (isCancel(option)) {
		cancel('Install cancelled, nothing written to disk');
		process.exit(0);
	}
}

export function getHelpText() {
	// Must use spaces for adjustments as output can get very wonky with tab output
	// Why not array of arrays, TBH it's more readable in source like this and easy to edit with column selection etc.
	// But the advantage would be that padEnd could be adjusted to the console.width... will wait for feedback.
	return `
Option              Short   Quiet Default   Values                      Description
--help              -h                                                  This help screen
--quiet             -q                                                  Quiet mode - see below
--verbose           -v                                                  Show shell output for troubleshooting
--name              -n      new-skel-app    string, no spaces           Name of the directory for the project
--types                     typescript      typescript|checkjs          TypeScript or JavaScript with JSDoc
--prettier                  true            true|false                  Whether Prettier is added
--eslint                    true            true|false                  Whether ESLint is added
--playwright                false           true|false                  Whether Playwright is added
--vitest                    false           true|false                  Whether Vitest is added
--codeblocks                false           true|false                  Install codeblock optional dependencies
--popups                    true            true|false                  Install popups dependencies
--path              -p      ''              relative or absolute path   Location to install, name is appended
--forms                     false           true|false                  Add Tailwinds Forms plugin
--typography                false           true|false                  Add Tailwinds Typography plugin
--skeletontheme     -t      skeleton        skeleton                    Choose one for the Skeleton theme
                                            modern
                                            hamlindigo
                                            rocket
                                            sahara
                                            gold-nouveau
                                            vintage
                                            seafoam
                                            crimson
--skeletontemplate          bare            bare                        The Skeleton template to use
                                            welcome

Quiet mode is for automated installs for testing, CI/CD.  It will take all of the default values in the
Quiet Default column, but you can provide any other flags to override as you see fit.  If you just want
to generate a new project but still ask for a name, you need to provide all the other args except the 
ones to be filled in by the user.
`;
}
