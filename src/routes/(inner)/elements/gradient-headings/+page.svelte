<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Gradient Headings',
		description: 'Create gradient-colored heading styles.',
		// imports: ['GradientHeading'],
		// source: 'components/GradientHeading'
		dependencies: [{ label: 'Tailwind Gradients', url: 'https://tailwindcss.com/docs/gradient-color-stops' }]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-4">
			<div class="card variant-glass p-4 text-center ">
				<h1 class="!text-7xl">
					<span
						class="bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone"
					>
						Skeleton
					</span>
				</h1>
			</div>
			<div class="card !bg-neutral-900 p-4 flex justify-center space-x-2">
				<h3>
					<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Design.</span>
				</h3>
				<h3>
					<span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Build.</span>
				</h3>
				<h3>
					<span class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Deploy.</span>
				</h3>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- prettier-ignore -->
		<p>These presentational styles can be generated using standard <a href="https://tailwindcss.com/docs/gradient-color-stops" target="_blank" rel="noreferrer">Tailwind gradient</a> utlity classes. Skeleton is not required for this.
		</p>
		<section class="space-y-4">
			<h2>Apply Inline</h2>
			<p>Apply these classes inline in your HTML template. The <em>span</em> tag is required.</p>
			<CodeBlock
				language="html"
				code={`
<h1>
	<span class="bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone">
		Skeleton
	</span>
</h1>
				`}
			/>
		</section>
		<section class="space-y-4">
			<h2>Using @apply</h2>
			<p>
				Create a new class using <code>@apply</code> in your <code>app.postcss</code> global stylesheet. Then apply the following styles.
			</p>
			<CodeBlock
				language="css"
				code={`
.gradient-heading {
	@apply bg-clip-text text-transparent box-decoration-clone;
	/* Direction */
	@apply bg-gradient-to-br;
	/* Color Stops */
	@apply from-primary-500 via-tertiary-500 to-secondary-500;
}
`}
			/>
			<p>Implement this class anywhere you wish for the header to be applied. The <em>span</em> tag is required.</p>
			<CodeBlock language="html" code={`<h1><span class="gradient-heading">Skeleton</span></h1>`} />
		</section>
	</svelte:fragment>
</DocsShell>
