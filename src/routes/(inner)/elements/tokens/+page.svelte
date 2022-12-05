<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Design Tokens',
		description: 'Provides a set of utility classes that adjust based on your theme settings.',
		stylesheetIncludes: ['all', 'tokens'],
		source: 'styles/tokens.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="flex items-center">
				<p>Please see the stylesheet source while we formalize this feature.</p>
			</div>
			<a
				class="btn btn-filled-accent place-self-center"
				href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/styles/tokens.css"
				target="_blank"
				rel="noreferrer">View Source &rarr;</a
			>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<!-- prettier-ignore -->
			<p>
				Skeleton themes are paired with a powerful <a href="https://vimeo.com/showcase/9653752/video/724689965" target="_blank" rel="noreferrer">design token system</a> to create utility classes based on theme settings. These cover common styles for backgrounds, border radius, fonts, and more. In fact, most components use these tokens as the default settings, which means components auto-adapt to your theme style with minimal configuration out of the box.
			</p>
		</section>
		<!-- <CodeBlock language="html" code={`<span class="font-heading-token">Font Family</span>`} /> -->
	</svelte:fragment>
</DocsShell>
