<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { CodeBlock, SlideToggle } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Placeholders',
		description: 'Provides "skeleton" placeholders that can display while content loads.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/placeholders'],
		source: 'styles/elements/placeholders.css',
		classes: [
			['<code class="code">placeholder</code>', '-', 'Applies the default placeholder style.'],
			['<code class="code">placeholder-circle</code>', '-', 'Applies the circular placeholder style.']
		]
	};

	// Local
	let animate = true;
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<section class="card w-full">
					<div class="card-header flex justify-between items-center">
						<div class="flex justify-center items-center space-x-4" class:animate-pulse={animate}>
							<div class="placeholder-circle w-16" />
							<div class="placeholder-circle w-14" />
							<div class="placeholder-circle w-10" />
						</div>
					</div>
					<div class="p-4 space-y-4" class:animate-pulse={animate}>
						<div class="placeholder" />
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="placeholder" />
						<div class="placeholder" />
					</div>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="text-center">
					<SlideToggle bind:checked={animate} name="animated" accent="bg-secondary-500">Animated</SlideToggle>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="html" code={`<div class="placeholder" />`} />
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Apply the <code class="code">.placeholder</code> class to any <em>div</em> element.
		</p>
		<!-- Layout -->
		<div class="space-y-4">
			<h2 class="h2">Layout</h2>
			<!-- prettier-ignore -->
			<p>
				Use the <a class="anchor" href="https://tailwindcss.com/docs/grid-template-columns" target="_blank" rel="noreferrer">Tailwind column and gap classes</a> to adjust column amount and gap spacing.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<section class="card w-full">
						<div class="p-4 space-y-4" class:animate-pulse={animate}>
							<div class="placeholder" />
							<div class="grid grid-cols-3 gap-8">
								<div class="placeholder" />
								<div class="placeholder" />
								<div class="placeholder" />
							</div>
							<div class="grid grid-cols-4 gap-4">
								<div class="placeholder" />
								<div class="placeholder" />
								<div class="placeholder" />
								<div class="placeholder" />
							</div>
						</div>
					</section>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<section class="card w-full">
	<div class="p-4 space-y-4">
		<div class="placeholder" />
		<div class="grid grid-cols-3 gap-8">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	</div>
</section>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Circular -->
		<div class="space-y-4">
			<h2 class="h2">Circular</h2>
			<p>Apply the <code class="code">.placeholder-circle</code> class and set a width to define the diameter.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="placeholder-circle w-16" class:animate-pulse={animate} />
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="placeholder-circle w-16" />`} />
				</svelte:fragment>
			</DocsPreview>
		</div>
		<!-- Animated -->
		<div class="space-y-4">
			<h2 class="h2">Animated</h2>
			<p>Apply the <code class="code">.animate-pulse</code> utility class provided by Tailwind.</p>
			<CodeBlock language="html" code={`<div class="placeholder animate-pulse" />`} />
		</div>
	</svelte:fragment>
</DocsShell>
