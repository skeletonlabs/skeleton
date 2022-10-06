<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Template',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eius officia aliquid beatae libero voluptas ea reprehenderit sed, ducimus quae reiciendis esse qui repudiandae veritatis perferendis deserunt ut magnam quisquam.',
		imports: ['Template'],
		types: ['Template'],
		stylesheetIncludes: ['core', 'elements'],
		stylesheets: ['elements/template'],
		source: 'components/Template'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
	};
	const properties: DocsShellTable[] = [
		{
			// label: '(label)',
			// description: '(description)',
			headings: ['Prop', 'Type', 'Default', 'Values', 'Required', 'Description'],
			source: [
				['<code>foo</code>', '-', '-', '-', '&check;', '...'],
				['<code>bar</code>', '-', '-', '-', '-', '...']
			]
		}
	];
	const events: DocsShellTable[] = [
		{
			headings: ['Event', 'Description'],
			source: [
				['<code>on:click</code>', '...'],
				['<code>on:hover</code>', '...']
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
			headings: ['Name', 'Description'],
			source: [['<code>default</code>', '...']]
		}
	];
	const a11y: DocsShellTable[] = [
		{
			aria: 'https://www.w3.org/WAI/ARIA/apg/',
			headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
			source: [
				['<code>foo</code>', '-', '-', '-', '...'],
				['<code>bar</code>', '-', '-', '-', '...']
			]
		}
	];
</script>

<DocsShell {settings} {properties} {events} {classes} {slots} {a11y}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card card-body">
			<p class="text-center">(examples)</p>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Describe the usage of this feature.</p>
	</svelte:fragment>
</DocsShell>
