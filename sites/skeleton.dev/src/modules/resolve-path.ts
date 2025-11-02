import { getActiveFramework } from '@/modules/framework';
import type { Params } from 'astro';
import { GIT_BRANCH } from 'astro:env/server';

export function resolvePath(params: Params, path: string) {
	return path.replaceAll('[framework]', getActiveFramework(params).id).replaceAll('[branch]', GIT_BRANCH);
}
