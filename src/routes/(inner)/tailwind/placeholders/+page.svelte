<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Placeholders',
		description: 'Provides "skeleton" placeholders that can display while content loads.',
		stylesheetIncludes: ['core', 'elements'],
		stylesheets: ['elements/placeholders'],
		source: 'styles/elements/placeholders.css'
	};
	const classes: DocsShellTable[] = [
		{
			headings: ['Class', 'Description'],
			source: [
				['<code>placeholder</code>', 'Applies the default placeholder style.'],
				['<code>placeholder-circle</code>', 'Applies the circular placeholder style.']
			]
		}
	];

	// Local
	let animate: boolean = true;
</script>

<DocsShell {settings} {classes}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="card">
			<div class="card-header flex justify-between items-center">
				<div class="flex justify-center items-center space-x-4" class:animate-pulse={animate}>
					<div class="placeholder-circle w-16" />
					<div class="placeholder-circle w-14" />
					<div class="placeholder-circle w-10" />
				</div>
				<SlideToggle bind:checked={animate} accent="bg-accent-500">Animated</SlideToggle>
			</div>
			<div class="card-body space-y-4" class:animate-pulse={animate}>
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

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<CodeBlock language="html" code={`<div class="placeholder" />`} />
		</div>
		<!-- Circular -->
		<div class="space-y-4">
			<h2>Circular</h2>
			<p>Apply the <code>.placeholder-circle</code> class and set a width to define the diameter.</p>
			<CodeBlock language="html" code={`<div class="placeholder-circle w-16" />`} />
		</div>
		<!-- Animated -->
		<div class="space-y-4">
			<h2>Animated</h2>
			<p>Apply the <code>.animate-pulse</code> utility class provided by Tailwind.</p>
			<CodeBlock language="html" code={`<div class="placeholder animate-pulse" />`} />
		</div>
		<!-- Global Styles -->
		<div class="space-y-4">
			<h2>Global Styles</h2>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock language="css" code={`.placeholder { @apply rounded-none; }`} />
		</div>
	</svelte:fragment>
</DocsShell>
