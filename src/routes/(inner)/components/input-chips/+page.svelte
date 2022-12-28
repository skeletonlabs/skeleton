<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Components
	import InputChip from '$lib/components/InputChip/InputChip.svelte';

	// @ts-expect-error
	import sveldInputChip from '$lib/components/InputChip/InputChip.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Input Chips',
		description: 'Allows input of multiple values.',
		imports: ['InputChip'],
		// types: ['Template'],
		// stylesheetIncludes: ['all', 'elements'],
		// stylesheets: ['elements/template'],
		source: 'components/InputChip',
		// aria: 'https://www.w3.org/WAI/ARIA/apg/'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
		components: [{ sveld: sveldInputChip }]
		// classes: [
		// 	['<code>.foo</code>', '-', '...'],
		// 	['<code>.bar</code>', '-', '...']
		// ],
		// keyboard: [
		// 	['<code>foo</code>', '-', '-', '-', '...'],
		// 	['<code>bar</code>', '-', '-', '-', '...']
		// ]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card p-4">
			<InputChip />
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<h2>Title</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</div>
	</svelte:fragment>
</DocsShell>
