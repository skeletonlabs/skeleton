import { getActiveFrameworkId } from '@/modules/framework';
import type { AstroGlobal } from 'astro';
import { GIT_BRANCH } from 'astro:env/server';

export function resolvePath(Astro: AstroGlobal, path: string) {
	return path.replaceAll('[framework]', getActiveFrameworkId(Astro)).replaceAll('[branch]', GIT_BRANCH);
}
