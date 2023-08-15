import { fileURLToPath } from 'node:url';
import { cancel, isCancel } from '@clack/prompts';
import path from 'node:path';
import fs from 'fs-extra';
import columnify from 'columnify';

export function whichPMRuns() {
	const userAgent = process.env.npm_config_user_agent;
	if (!userAgent) {
		return 'npm';
	}
	const pmSpec = userAgent.split(' ')[0] || '';
	const separatorPos = pmSpec.lastIndexOf('/');
	const name = pmSpec?.substring(0, separatorPos);
	return {
		name: name === 'npminstall' ? 'npm' : name,
		version: pmSpec?.substring(separatorPos + 1),
	};
}
// Set a JSON value when the parent keys may not exist
export function setNestedValue(obj, path, value) {
	let current = obj;
	for (let i = 0; i < path.length - 1; i++) {
		if (current[path[i]] === undefined) {
			current[path[i]] = {};
		}
		current = current[path[i]];
	}
	current[path[path.length - 1]] = value;
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
// Insert If True
export function iit(valToBeTruthy, valToReturnIfTruthy, valToReturnIfFalsy) {
	if (valToBeTruthy) {
		return valToReturnIfTruthy;
	} else {
		if (valToReturnIfFalsy === undefined) {
			return '';
		} else {
			return valToReturnIfFalsy;
		}
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

export function checkIfDirSafeToInstall(path) {
	// no dir, no conflicts
	if (!fs.existsSync(path)) {
		return true;
	}
	let conflicts = fs.readdirSync(path);
	conflicts = conflicts.filter((file) =>
		/^(package.json|svelte.config.js|tailwind.config.cjs|postcss.config.cjs|vite.config.ts)$/.test(file),
	);

	if (conflicts.length > 0) {
		const err = new Error(
			`The directory ${path} contains files that could conflict:\n${conflicts.join(
				'\n',
			)}\n\nPlease provide a clean directory to install into.`,
		);
		throw err;
	}

	// 10 was picked because if it's in something like a ~/projects directory and it would be annoying to strip out the added files and folders
	if (conflicts.length > 10) {
		const err = new Error(`The directory ${path} contains too many files/folders to safely install.`);
		throw err;
	}
	return true;
}

export function getHelpText() {
	// TODO: Ensure options are up to date
	const data = [
		{ Option: '--help', Short: '-h', 'Quiet Default': '', Value: '', Description: 'This help screen' },
		{ Option: '--quiet', Short: '-q', 'Quiet Default': '', Value: '', Description: 'Quiet mode - see below' },
		{
			Option: '--name',
			Short: '-n',
			'Quiet Default': 'skeleton-app',
			Value: 'skeleton-app',
			Description: 'Name of the directory for the project',
		},
		{
			Option: '--path',
			Short: '-p',
			'Quiet Default': "''",
			Value: 'relative or absolute path',
			Description: 'Location to install, name is appended',
		},
		{
			Option: '--types',
			Short: '',
			'Quiet Default': 'typescript',
			Value: 'typescript|checkjs',
			Description: 'TypeScript or JavaScript with JSDoc',
		},
		{ Option: '--prettier', Short: '', 'Quiet Default': 'true', Value: 'true|false', Description: 'Whether Prettier is added' },
		{ Option: '--eslint', Short: '', 'Quiet Default': 'true', Value: 'true|false', Description: 'Whether ESLint is added' },
		{ Option: '--playwright', Short: '', 'Quiet Default': 'false', Value: 'true|false', Description: 'Whether Playwright is added' },
		{ Option: '--vitest', Short: '', 'Quiet Default': 'false', Value: 'true|false', Description: 'Whether Vitest is added' },
		{
			Option: '--codeblocks',
			Short: '',
			'Quiet Default': 'false',
			Value: 'true|false',
			Description: 'Install codeblock optional dependencies',
		},
		{ Option: '--popups', Short: '', 'Quiet Default': 'false', Value: 'true|false', Description: 'Install popups dependencies' },
		{
			Option: '--mdsvex',
			Short: '',
			'Quiet Default': 'false',
			Value: 'true|false',
			Description: 'Install mdsvex for markdown processing',
		},
		{ Option: '--forms', Short: '', 'Quiet Default': 'false', Value: 'true|false', Description: 'Install Tailwinds Forms plugin' },
		{
			Option: '--typography',
			Short: '',
			'Quiet Default': 'false',
			Value: 'true|false',
			Description: 'Install Tailwinds Typography plugin',
		},
		{
			Option: '--skeletontemplatedir',
			Short: '',
			'Quiet Default': '',
			Value: '',
			Description: 'Path to directory containing templates',
		},
		{
			Option: '--skeletontheme',
			Short: '-t',
			'Quiet Default': 'skeleton',
			Value: 'skeleton',
			Description: 'Choose one for the Skeleton theme',
		},
		{ Option: '', Short: '', 'Quiet Default': 'modern', Value: 'modern', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'hamlindigo', Value: 'hamlindigo', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'rocket', Value: 'rocket', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'sahara', Value: 'sahara', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'gold-nouveau', Value: 'gold-nouveau', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'vintage', Value: 'vintage', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'seafoam', Value: 'seafoam', Description: '' },
		{ Option: '', Short: '', 'Quiet Default': 'crimson', Value: 'crimson', Description: '' },
		{
			Option: '--skeletontemplate',
			Short: '',
			'Quiet Default': 'bare',
			Value: 'bare',
			Description: 'Name of built in template to use',
		},
		{ Option: '', Short: '', 'Quiet Default': 'welcome', Value: 'welcome', Description: '' },
	];
	return (
		columnify(data, { columns: ['Option', 'Short', 'Default', 'Value', 'Description'] }) +
		`
	
Quiet mode is for automated installs for testing, CI/CD.  It will take all of the default values in the
Quiet Default column, but you can provide any other flags to override as you see fit.  If you just want
to generate a new project but still ask for a name, you need to provide all the other args except the 
ones to be filled in by the user.\n`
	);
}
