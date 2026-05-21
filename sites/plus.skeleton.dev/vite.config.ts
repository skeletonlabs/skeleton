import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import icons from 'unplugin-icons/vite';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

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
		sveltekit(),
		tailwind(),
		icons({ compiler: 'svelte' }),
		ensureDockerContainersAreRunning(['plus-skeleton-dev-postgres-1', 'plus-skeleton-dev-oauth2-server-1']),
	],
});
