<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import Table from '$lib/components/Table/Table.svelte';
	import type { TableSource } from '$lib/components/Table/types';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Design Tokens',
		description: 'Provides a set of utility classes that adjust based on your theme settings.',
		stylesheetIncludes: ['all', 'tokens'],
		source: 'styles/tokens'
	};

	// Local
	const vColors = 'primary | accent | tertiary | warning | surface';
	const vPairings = '50-900 | 100-800 | 200-700 | 300-600 | 400-500';
	const vCorners = 'tl | tr | bl | br';

	// Tables
	const tableBackgrounds: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>bg-[color]-backdrop-token</code>', vColors, 'Background styles for modal backdrops.'],
			['<code>bg-[color]-hover-token</code>', vColors, 'Background styles for hoverable elements.'],
			['<code>bg-[color]-active-token</code>', vColors, 'Background styles for active selected elements.'],
			[
				'<code>bg-[color]-[pairings]-token</code>',
				vPairings,
				'See <a href="https://user-images.githubusercontent.com/1509726/195171203-423e5b84-8763-40f1-b3ea-4cb2b8e38108.png">Reference</a>. The pairings can be reversed as well. (ex: 900-50)'
			]
		]
	};
	const tableBorderRadius: TableSource = {
		head: ['Class', 'Values', 'Description'],
		body: [
			['<code>rounded-token</code>', '', 'Border radius for small elements: buttons, badges, chips, etc.'],
			['<code>rounded-[corner]-token</code>', vCorners, 'Corner border radius styles for small elements.'],
			['<code>rounded-container-token</code>', '', 'Border radius for large elements, such as cards and textareas'],
			['<code>rounded-[corner]-container-token</code>', vCorners, 'Corner border radius styles large small elements.']
		]
	};
</script>

<!-- <CodeBlock language="html" code={`<span class="font-heading-token">Font Family</span>`} /> -->

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>
				Skeleton themes are paired with a powerful <a href="https://vimeo.com/showcase/9653752/video/724689965" target="_blank" rel="noreferrer">design token system</a> to create utility classes based on theme settings. These cover common styles for backgrounds, border radius, fonts, and more. In fact, most components use these tokens as the default settings, which means components auto-adapt to your theme style with minimal configuration out of the box.
			</p>
		</section>
		<section class="space-y-4">
			<h2>Backgrounds</h2>
			<Table source={tableBackgrounds} />
		</section>
		<section class="space-y-4">
			<h2>Border Radius</h2>
			<Table source={tableBorderRadius} />
		</section>
	</svelte:fragment>
</DocsShell>
