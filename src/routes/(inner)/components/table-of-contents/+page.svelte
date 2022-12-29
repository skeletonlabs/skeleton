<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import TableOfContents from '$lib/components/TableOfContents/TableOfContents.svelte';

	// @ts-expect-error
	import sveldTableOfContents from '$lib/components/TableOfContents/TableOfContents.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Table of Contents',
		description: 'Allows you to quickly navigate the hierarchy of headings for the current page.',
		imports: ['TableOfContents'],
		// types: ['Template'],
		// stylesheetIncludes: ['all', 'elements'],
		// stylesheets: ['elements/template'],
		source: 'components/TableOfContents',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/',
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
		components: [{ sveld: sveldTableOfContents }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card card-glass p-4 flex justify-center">
			<TableOfContents />
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- <CodeBlock language="html" code={`(code)`} /> -->
		<div class="space-y-4">
			<h2>Foobar</h2>
			<p>Describe how to use the feature.</p>
			<h3>Subtitle A</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<h3>Subtitle B</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<h3>Subtitle C</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>
		<div class="space-y-4">
			<h2>FizzBuzz</h2>
			<p>Describe how to use the feature.</p>
			<h3>Subtitle A</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<h3>Subtitle B</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		</div>
		<div class="bg-green-500 h-[2000px]" />
	</svelte:fragment>
</DocsShell>
