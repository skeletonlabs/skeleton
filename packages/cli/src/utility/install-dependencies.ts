import child_process from 'node:child_process';
import { promisify } from 'node:util';
import { detect, resolveCommand } from 'package-manager-detector';

const exec = promisify(child_process.exec);

async function installDependencies(cwd = process.cwd()) {
	const pm = await detect({
		cwd: cwd,
	});
	const resolvedCommand = resolveCommand(pm?.agent ?? 'npm', 'install', []);
	if (!resolvedCommand) {
		throw new Error('Could not resolve package manager command.');
	}
	return exec(`${resolvedCommand.command} ${resolvedCommand.args.join(' ')}`, {
		cwd: cwd,
	});
}

export { installDependencies };
