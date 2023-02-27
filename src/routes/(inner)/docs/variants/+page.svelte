<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Variants',
		description: 'Canned styles available to easily customize elements, components, and more.',
		source: 'tailwind/tokens'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Available via <code>.variant-[style]-[color]</code>. Applies the appropriate text/fill "on" color automatically.</p>
		<!-- Filled -->
		<section class="space-y-4">
			<h2>Filled</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-filled-primary p-4 capitalize">primary</div>
						<div class="card variant-filled-secondary p-4 capitalize">secondary</div>
						<div class="card variant-filled-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-filled-success p-4 capitalize">success</div>
						<div class="card variant-filled-warning p-4 capitalize">warning</div>
						<div class="card variant-filled-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-filled-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-filled-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-filled-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Ghost -->
		<section class="space-y-4">
			<h2>Ghost</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-ghost-primary p-4 capitalize">primary</div>
						<div class="card variant-ghost-secondary p-4 capitalize">secondary</div>
						<div class="card variant-ghost-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-ghost-success p-4 capitalize">success</div>
						<div class="card variant-ghost-warning p-4 capitalize">warning</div>
						<div class="card variant-ghost-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-ghost-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-ghost-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ghost-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Soft -->
		<section class="space-y-4">
			<h2>Soft</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-soft-primary p-4 capitalize">primary</div>
						<div class="card variant-soft-secondary p-4 capitalize">secondary</div>
						<div class="card variant-soft-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-soft-success p-4 capitalize">success</div>
						<div class="card variant-soft-warning p-4 capitalize">warning</div>
						<div class="card variant-soft-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-soft-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-soft-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-soft-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Ringed -->
		<section class="space-y-4">
			<h2>Ringed</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold">
						<div class="card variant-ringed-primary p-4 capitalize">primary</div>
						<div class="card variant-ringed-secondary p-4 capitalize">secondary</div>
						<div class="card variant-ringed-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-ringed-success p-4 capitalize">success</div>
						<div class="card variant-ringed-warning p-4 capitalize">warning</div>
						<div class="card variant-ringed-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-ringed-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-ringed-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-ringed-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Glass -->
		<section class="space-y-4">
			<h2>Glass</h2>
			<p>Adds a frosted glass style effect. Perfect for overlapping busy or animated backgrounds.</p>
			<DocsPreview background="neutral" regionViewport="!p-0">
				<svelte:fragment slot="preview">
					<div
						class="w-full grid grid-cols-3 gap-4 text-center text-xs font-bold p-4 md:p-10 text-white"
						style="background: url('https://camo.githubusercontent.com/405ec87f325f46fb3b98dff86e47a3122360532127d9ea40aa9d78ce107b9d6a/68747470733a2f2f692e696d6775722e636f6d2f4c65756836776d2e676966') top center no-repeat; background-size: cover;"
					>
						<div class="card variant-glass-primary p-4 capitalize">primary</div>
						<div class="card variant-glass-secondary p-4 capitalize">secondary</div>
						<div class="card variant-glass-tertiary p-4 capitalize">tertiary</div>
						<div class="card variant-glass-success p-4 capitalize">success</div>
						<div class="card variant-glass-warning p-4 capitalize">warning</div>
						<div class="card variant-glass-error p-4 capitalize">error</div>
						<div class="col-span-3 card variant-glass-surface p-4 capitalize">surface</div>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="footer">
					<div class="text-center">
						<a class="btn btn-sm variant-soft" href="https://github.com/Horus645/swww" target="_blank" rel="noreferrer"> Image Source </a>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock language="html" code={`<div class="variant-glass-primary">primary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-secondary">secondary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-tertiary">tertiary</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-success">success</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-warning">warning</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-error">error</div>`} />
					<CodeBlock language="html" code={`<div class="variant-glass-surface">surface</div>`} />
				</svelte:fragment>
			</DocsPreview>
		</section>
	</svelte:fragment>
</DocsShell>
