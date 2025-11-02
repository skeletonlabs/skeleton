import { getCollection } from '@/modules/content';
import type { Params } from 'astro';

const frameworks = await getCollection('frameworks');

function getDefaultFramework() {
	const framework = frameworks.find((framework) => framework.data.default)!;
	if (!framework) {
		throw new Error('No default framework defined in content collection "frameworks". Please set one framework as default.');
	}
	return framework;
}

export function getActiveFramework(params: Params) {
	const framework = frameworks.find((framework) => framework.id === params.framework);
	if (!framework) {
		return getDefaultFramework();
	}
	return framework;
}
