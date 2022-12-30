<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// @ts-expect- error sveld import NOTE remove space between hyphen and error, this is to keep svelte check happy
	// import sveldComp from '$lib/.../Component.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Template',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eius officia aliquid beatae libero voluptas ea reprehenderit sed, ducimus quae reiciendis esse qui repudiandae veritatis perferendis deserunt ut magnam quisquam.',
		imports: ['Template'],
		types: ['Template'],
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/template'],
		source: 'components/Template',
		aria: 'https://www.w3.org/WAI/ARIA/apg/'
		// dependencies: [{ label: 'Highlight.js', url: 'https://highlightjs.org/' }],
		// components: [{sveld: sveldComp}],
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
			<p class="text-center">(examples)</p>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<h2>Title</h2>
			<p>Describe how to use the feature.</p>
			<CodeBlock language="html" code={`(code)`} />
		</section>
	</svelte:fragment>
</DocsShell>
