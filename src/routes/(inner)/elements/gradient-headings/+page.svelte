<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Gradient Headings',
		description: 'Generate a gradient-colored heading.',
		// imports: ['GradientHeading'],
		// source: 'components/GradientHeading'
		dependencies: [{ label: 'Tailwind Gradients', url: 'https://tailwindcss.com/docs/gradient-color-stops' }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="card variant-glass p-4 text-center">
			<h1>
				<span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone">Skeleton</span>
			</h1>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>This can be created purely with Tailwind utility classes. Skeleton is not required.</p>
			<CodeBlock language="html" code={`<h1><span class="gradient-heading">Skeleton</span></h1>`} />
			<CodeBlock
				language="css"
				code={`
.gradient-heading {
	@apply bg-gradient-to-r from-primary-500 to-bg-secondary-500;
	@apply bg-clip-text text-transparent box-decoration-clone;
}
`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Tailwind Documentation</h2>
			<!-- prettier-ignore -->
			<p>See the <a class="!text-error-200" href="https://tailwindcss.com/docs/gradient-color-stops" target="_blank" rel="noreferrer">Tailwind documentation</a> for additional gradient options.</p>
		</section>
	</svelte:fragment>
</DocsShell>
