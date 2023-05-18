import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';

export let docShellDefaults: DocsShellSettings = {
	// Heading
	feature: DocsFeature.Component,
	name: '(name)',
	description: '(description)',

	// Meta
	imports: [],
	types: [],
	stylesheetIncludes: [],
	stylesheets: [],
	package: { name: '@skeletonlabs/skeleton', url: 'https://www.npmjs.com/package/@skeletonlabs/skeleton' },
	source: undefined,
	aria: undefined,
	dependencies: [],

	// Docs
	components: [],
	restProps: undefined,
	parameters: [],
	classes: [],
	keyboard: []
};
