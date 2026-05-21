import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import icons from 'unplugin-icons/vite';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

import fs from 'node:fs';
import path from 'node:path';

export function logLibContents(): Plugin {
	return {
		name: 'log-lib-contents',

		buildStart() {
			const libPath = path.resolve(process.cwd(), 'src/lib');

			console.log('\n=== src/lib contents ===');

			walk(libPath);

			console.log('=== end src/lib contents ===\n');
		},
	};
}

function walk(dir: string, prefix = '') {
	if (!fs.existsSync(dir)) {
		console.log('(missing) ' + dir);
		return;
	}

	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			console.log(`${prefix}[d] ${entry.name}/`);
			walk(fullPath, prefix + '  ');
		} else {
			console.log(`${prefix}- ${entry.name}`);
		}
	}
}

const execAsync = promisify(exec);

function ensureDockerContainersAreRunning(containers: string[]) {
	return {
		name: 'ensure-docker-containers-are-running',
		apply: 'serve',
		async configureServer() {
			for (const container of containers) {
				try {
					const dockerInspect = await execAsync(`docker inspect -f "{{.State.Running}}" ${container}`);

					if (dockerInspect.stdout.trim() === 'true') {
						continue;
					}
				} catch {}

				this.warn(`Docker container "${container}" is not running. Start it with "pnpm env:start".`);
			}
		},
	} satisfies Plugin;
}

export default defineConfig({
	plugins: [
		logLibContents(),
		sveltekit(),
		tailwind(),
		icons({ compiler: 'svelte' }),
		ensureDockerContainersAreRunning(['plus-skeleton-dev-postgres-1', 'plus-skeleton-dev-oauth2-server-1']),
	],
});
