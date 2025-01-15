import { detect, resolveCommand } from 'package-manager-detector';
import { execSync } from 'node:child_process';

async function installDependencies(cwd = process.cwd()) {
	const pm = await detect({
		cwd: cwd
	});
	const resolvedCommand = resolveCommand(pm?.agent ?? 'npm', 'install', ['--force']);
	if (!resolvedCommand) {
		throw new Error('Could not resolve package manager command.');
	}
	execSync(`${resolvedCommand.command} ${resolvedCommand.args.join(' ')}`, {
		cwd: cwd,
		stdio: 'ignore'
	});
}

export { installDependencies };
