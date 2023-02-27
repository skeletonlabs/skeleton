<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Variants',
		description: 'Canned styles classes provided to quickly customize elements, components, and more.',
		source: 'tailwind/tokens'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<h2>Variants</h2>
			<p>Supports all standard variant styles via <code>.variant-[style]-[color]</code>.</p>
			<CodeBlock language="html" code={`<div class="card variant-filled-primary p-4">Skeleton</div>`} />
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
				<!-- filled -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Filled</p>
					<div class="card variant-filled-primary p-4">primary</div>
					<div class="card variant-filled-secondary p-4">secondary</div>
					<div class="card variant-filled-tertiary p-4">tertiary</div>
					<div class="card variant-filled-success p-4">success</div>
					<div class="card variant-filled-warning p-4">warning</div>
					<div class="card variant-filled-error p-4">error</div>
					<div class="card variant-filled-surface p-4">surface</div>
				</div>
				<!-- soft -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Soft</p>
					<div class="card variant-soft-primary p-4">primary</div>
					<div class="card variant-soft-secondary p-4">secondary</div>
					<div class="card variant-soft-tertiary p-4">tertiary</div>
					<div class="card variant-soft-success p-4">success</div>
					<div class="card variant-soft-warning p-4">warning</div>
					<div class="card variant-soft-error p-4">error</div>
					<div class="card variant-soft-surface p-4">surface</div>
				</div>
				<!-- ringed -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ringed</p>
					<div class="card variant-ringed-primary p-4">primary</div>
					<div class="card variant-ringed-secondary p-4">secondary</div>
					<div class="card variant-ringed-tertiary p-4">tertiary</div>
					<div class="card variant-ringed-success p-4">success</div>
					<div class="card variant-ringed-warning p-4">warning</div>
					<div class="card variant-ringed-error p-4">error</div>
					<div class="card variant-ringed-surface p-4">surface</div>
				</div>
				<!-- ghost -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ghost</p>
					<div class="card variant-ghost-primary p-4">primary</div>
					<div class="card variant-ghost-secondary p-4">secondary</div>
					<div class="card variant-ghost-tertiary p-4">tertiary</div>
					<div class="card variant-ghost-success p-4">success</div>
					<div class="card variant-ghost-warning p-4">warning</div>
					<div class="card variant-ghost-error p-4">error</div>
					<div class="card variant-ghost-surface p-4">surface</div>
				</div>
			</div>
			<!-- glass -->
			<div class="space-y-4">
				<h3>Glass</h3>
				<p>
					The <em>glass</em> variant provides a tinted and blurred glass-like effect. Recommended when overlapping a background image.
				</p>
				<div
					class="grid grid-cols-3 gap-4 p-4 rounded-container-token text-center text-xs font-bold bg-cover bg-center"
					style="background-image: url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e')"
				>
					<div class="card variant-glass-primary p-4 shadow !text-white">primary</div>
					<div class="card variant-glass-secondary p-4 shadow !text-white">secondary</div>
					<div class="card variant-glass-tertiary p-4 shadow !text-white">tertiary</div>
					<div class="card variant-glass-success p-4 shadow !text-white">success</div>
					<div class="card variant-glass-warning p-4 shadow !text-white">warning</div>
					<div class="card variant-glass-error p-4 shadow !text-white">error</div>
					<div class="col-span-3 card variant-glass-surface p-4 shadow !text-white">surface</div>
				</div>
			</div>
		</div>
	</svelte:fragment>
</DocsShell>
