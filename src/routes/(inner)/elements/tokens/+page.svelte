<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Design Tokens',
		description: 'Provides a set of utility classes based on your theme CSS custom properties.',
		stylesheetIncludes: ['all', 'tokens'],
		source: 'styles/tokens.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="flex items-center">
				<p>While we formalize this feature, please see the stylesheet directly as a source reference.</p>
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
		<hr />
		<section class="space-y-4">
			<p>Tokens are avialable to use anywhere in your project. Here's a few examples:</p>
			<CodeBlock
				language="html"
				code={`<!-- Apply your theme's border radius value -->\n<div class="w-10 h-10 bg-primary-500 rounded-token">Rounded</div>`}
			/>
			<CodeBlock language="html" code={`<!-- Apply your theme's heading font -->\n<span class="font-heading-token">Font Family</span>`} />
			<CodeBlock
				language="html"
				code={`<!-- Set the text color, which auto adjusts for light/dark modes -->\n<span class="text-token">Skeleton</span>`}
			/>
		</section>
	</svelte:fragment>
</DocsShell>
