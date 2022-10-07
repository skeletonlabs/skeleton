<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import AppBar from '$lib/components/AppBar/AppBar.svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Bar',
		description: 'A header element for the top of your page layout. Pairs well with the <a href="/components/app-shell">App Shell</a>.',
		imports: ['AppBar'],
		source: 'components/AppBar'
	};
	const properties: DocsShellTable[] = [
		{
			headings: ['Prop', 'Type', 'Default', 'Description'],
			source: [
				['<code>background</code>', 'string', 'bg-surface-100 dark:bg-surface-800', 'Provide classes to set background color.'],
				['<code>border</code>', 'string', '-', 'Provide classes to set border styles.'],
				['<code>padding</code>', 'string', 'px-4 py-4 md:py-6', 'Provide classes to set padding.'],
				['<code>shadow</code>', 'string', 'shadow-lg', 'Provide classes to define a box shadow.'],
				['<code>space</code>', 'string', 'space-x-4', 'Provide classes to set horizontal spacing.']
			]
		}
	];
	const classes: DocsShellTable[] = [
		{
			description: 'Coming soon.'
			// headings: ['Selector', 'Description'],
			// source: [
			// 	['<code>.foo</code>', '...'],
			// 	['<code>.bar</code>', '...']
			// ]
		}
	];
	const slots: DocsShellTable[] = [
		{
			headings: ['Name', 'Style Prop', 'Description'],
			source: [
				['<code>default</code>', 'slotDefault', 'Provides content within the center of the bar, e.g. a search element.'],
				['<code>lead</code>', 'slotLead', 'Provides content on the left end of the bar, e.g. a logo.'],
				['<code>trail</code>', 'slotTrail', 'Provides content on the right end of the bar, e.g. navigation elements.']
			]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
			headings: ['Prop', 'Type', 'Description'],
			source: [
				['<code>label</code>', 'string', 'Provide a semantic ID for the ARIA label.'],
				['<code>labelledby</code>', 'string', 'Provide the ID of the element that labels the toolbar.']
			]
		}
	];
</script>

<DocsShell {settings} {properties} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<AppBar>
			<svelte:fragment slot="lead">
				<span class="text-base md:text-3xl font-bold uppercase">Logo</span>
			</svelte:fragment>
			<input type="search" placeholder="Search..." class="max-w-[200px]" />
			<svelte:fragment slot="trail">
				<div class="flex items-center space-x-6">
					<a href="/components/app-bar">Link</a>
					<SvgIcon />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<CodeBlock
			language="html"
			code={`
<AppBar>
	<svelte:fragment slot="lead">(lead)</svelte:fragment>
	(center)
	<svelte:fragment slot="trail">(trail)</svelte:fragment>
</AppBar>
		`}
		/>
	</svelte:fragment>
</DocsShell>
