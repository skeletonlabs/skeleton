<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Placeholders',
		description: 'Provides "skeleton" placeholders that can display while content loads.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/placeholders'],
		source: 'styles/elements/placeholders.css',
		classes: [
			['<code>placeholder</code>', '-', 'Applies the default placeholder style.'],
			['<code>placeholder-circle</code>', '-', 'Applies the circular placeholder style.']
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
		<!-- Circular -->
		<div class="space-y-4">
			<h2>Circular</h2>
			<p>Apply the <code>.placeholder-circle</code> class and set a width to define the diameter.</p>
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
			<h2>Animated</h2>
			<p>Apply the <code>.animate-pulse</code> utility class provided by Tailwind.</p>
			<CodeBlock language="html" code={`<div class="placeholder animate-pulse" />`} />
		</div>
	</svelte:fragment>
</DocsShell>
