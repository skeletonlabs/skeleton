<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Badges',
		description: 'Provides a robust set of non-interactive badge styles',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/badges'],
		source: 'styles/elements/badges.css',
		classes: [
			['<code>badge</code>', '-', 'Provides the standard badge style.'],
			['<code>badge-icon</code>', '-', 'Provides the icon badge style.'],
			['<code>badge-[variant]</code>', '-', 'Preset styles for badge and badge icons.']
		]
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<!-- - -->
			<div class="lg:col-span-3 card variant-glass p-4">
				<span class="badge variant-filled">Skeleton</span>
				<span class="badge variant-filled-primary">
					<i class="fa-solid fa-check" />
					<span>Complete</span>
				</span>
				<span class="badge variant-filled-secondary">
					<span>Skeleton</span>
					<i class="fa-solid fa-skull" />
				</span>
				<span class="badge variant-filled-tertiary">
					<i class="fa-solid fa-heart" />
					<span>Favorite</span>
				</span>
			</div>
			<!-- - -->
			<div class="card variant-glass p-4">
				<h4>Skeleton</h4>
				<sup class="badge variant-filled-primary">Sup</sup>
			</div>
			<!-- - -->
			<div class="card variant-glass p-4">
				<h4>Skeleton</h4>
				<sub class="badge variant-filled-secondary">Sub</sub>
			</div>
			<!-- - -->
			<div class="card variant-glass p-4 !space-x-6">
				<div class="relative inline-block">
					<span class="badge variant-filled-primary absolute -top-3 -right-4 z-10">50k</span>
					<button class="btn btn-sm variant-ghost-surface">Button</button>
				</div>
				<div class="relative inline-block">
					<span class="badge-icon variant-filled-secondary absolute -top-1 -right-1 z-10">2</span>
					<Avatar />
				</div>
				<div class="relative inline-block">
					<span class="badge-icon variant-filled-tertiary absolute -top-1 -right-1 z-10">
						<i class="fa-solid fa-heart" />
					</span>
					<Avatar />
				</div>
			</div>
			<div class="card variant-glass p-4 lg:col-span-3 grid grid-cols-1 md:grid-cols-5 gap-4">
				<!-- filled -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Filled</p>
					<div><span class="badge variant-filled-primary">primary</span></div>
					<div><span class="badge variant-filled-secondary">secondary</span></div>
					<div><span class="badge variant-filled-tertiary">tertiary</span></div>
					<div><span class="badge variant-filled-success">success</span></div>
					<div><span class="badge variant-filled-warning">warning</span></div>
					<div><span class="badge variant-filled-error">error</span></div>
					<div><span class="badge variant-filled-surface">surface</span></div>
				</div>
				<!-- soft -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Soft</p>
					<div><span class="badge variant-soft-primary">primary</span></div>
					<div><span class="badge variant-soft-secondary">secondary</span></div>
					<div><span class="badge variant-soft-tertiary">tertiary</span></div>
					<div><span class="badge variant-soft-success">success</span></div>
					<div><span class="badge variant-soft-warning">warning</span></div>
					<div><span class="badge variant-soft-error">error</span></div>
					<div><span class="badge variant-soft-surface">surface</span></div>
				</div>
				<!-- ringed -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ringed</p>
					<div><span class="badge variant-ringed-primary">primary</span></div>
					<div><span class="badge variant-ringed-secondary">secondary</span></div>
					<div><span class="badge variant-ringed-tertiary">tertiary</span></div>
					<div><span class="badge variant-ringed-success">success</span></div>
					<div><span class="badge variant-ringed-warning">warning</span></div>
					<div><span class="badge variant-ringed-error">error</span></div>
					<div><span class="badge variant-ringed-surface">surface</span></div>
				</div>
				<!-- ghost -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Ghost</p>
					<div><span class="badge variant-ghost-primary">primary</span></div>
					<div><span class="badge variant-ghost-secondary">secondary</span></div>
					<div><span class="badge variant-ghost-tertiary">tertiary</span></div>
					<div><span class="badge variant-ghost-success">success</span></div>
					<div><span class="badge variant-ghost-warning">warning</span></div>
					<div><span class="badge variant-ghost-error">error</span></div>
					<div><span class="badge variant-ghost-surface">surface</span></div>
				</div>
				<!-- glass -->
				<div class="grid grid-cols-1 gap-4 text-center text-xs font-bold">
					<p>Glass</p>
					<div><span class="badge variant-glass-primary">primary</span></div>
					<div><span class="badge variant-glass-secondary">secondary</span></div>
					<div><span class="badge variant-glass-tertiary">tertiary</span></div>
					<div><span class="badge variant-glass-success">success</span></div>
					<div><span class="badge variant-glass-warning">warning</span></div>
					<div><span class="badge variant-glass-error">error</span></div>
					<div><span class="badge variant-glass-surface">surface</span></div>
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Apply to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p>
			<CodeBlock language="html" code={`<span class="badge variant-filled-primary">Skeleton</span>`} />
		</section>
		<!-- Icon -->
		<section class="space-y-4">
			<h2>Badge Icon</h2>
			<p>A compact circular variation badge style.</p>
			<CodeBlock language="html" code={`<span class="badge-icon variant-filled-primary">💀</span>`} />
		</section>
		<!-- Variants -->
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>Variant styles are available via <code>.variant-[style]-[color]</code>.</p>
			<CodeBlock language="html" code={`<span class="badge variant-filled-surface">Skeleton</span>`} />
		</section>
		<!-- Overlapping -->
		<section class="space-y-4">
			<h2>Overlapping Icon</h2>
			<p>Use Tailwind utility classes to create overlapping elements.</p>
			<CodeBlock
				language="html"
				code={`
<div class="relative inline-block">
	<span class="badge-icon variant-filled-primary absolute -top-1 -right-1 z-10">💀</span>
	<Avatar />
</div>
		`.trim()}
			/>
		</section>
	</svelte:fragment>
</DocsShell>

<style lang="postcss">
	.p-4 {
		@apply flex justify-center items-center space-x-2;
	}
</style>
