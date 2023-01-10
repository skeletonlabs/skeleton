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
			<div class="card p-4">
				<span class="badge badge-filled-surface">Skeleton</span>
			</div>
			<!-- - -->
			<div class="lg:col-span-2 card p-4">
				<span class="badge badge-filled-primary">
					<i class="fa-solid fa-check" />
					<span>Complete</span>
				</span>
				<span class="badge badge-filled-secondary">
					<span>Skeleton</span>
					<i class="fa-solid fa-skull" />
				</span>
				<span class="badge badge-filled-tertiary">
					<i class="fa-solid fa-heart" />
					<span>Favorite</span>
				</span>
			</div>
			<!-- - -->
			<div class="card p-4">
				<h4>Skeleton</h4>
				<sup class="badge badge-filled-primary -ml-0">Sup</sup>
			</div>
			<!-- - -->
			<div class="card p-4">
				<h4>Skeleton</h4>
				<sub class="badge badge-filled-secondary -ml-0">Sub</sub>
			</div>
			<!-- - -->
			<div class="card p-4 !space-x-6">
				<div class="relative inline-block">
					<span class="badge badge-filled-primary absolute -top-3 -right-4 z-10">50k</span>
					<button class="btn btn-sm btn-ghost-surface">Button</button>
				</div>
				<div class="relative inline-block">
					<span class="badge-icon badge-filled-secondary absolute -top-1 -right-1 z-10">2</span>
					<Avatar />
				</div>
				<div class="relative inline-block">
					<span class="badge-icon badge-filled-tertiary absolute -top-1 -right-1 z-10">
						<i class="fa-solid fa-heart" />
					</span>
					<Avatar />
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Apply to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p>
			<CodeBlock language="html" code={`<span class="badge badge-filled-primary">Skeleton</span>`} />
		</section>
		<!-- Icon -->
		<section class="space-y-4">
			<h2>Badge Icon</h2>
			<p>A compact circular variation badge style.</p>
			<CodeBlock language="html" code={`<span class="badge-icon badge-filled-primary">💀</span>`} />
		</section>

		<!-- Variants -->
		<section class="space-y-4">
			<h2>Variants</h2>
			<p>
				A set of canned preset styles are available using <code>.badge-[variant]</code>. These are available for both badge and badge icons.
			</p>
			<CodeBlock language="html" code={`<span class="badge badge-filled-surface">Skeleton</span>`} />
			<section class="lg:col-span-3 card p-4">
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					<span class="badge badge-filled-surface">
						<i class="fa-solid fa-skull" />
						<span>filled-surface</span>
					</span>
					<span class="badge badge-filled-primary">
						<i class="fa-solid fa-skull" />
						<span>filled-primary</span>
					</span>
					<span class="badge badge-filled-secondary">
						<i class="fa-solid fa-skull" />
						<span>filled-secondary</span>
					</span>
					<span class="badge badge-filled-tertiary">
						<i class="fa-solid fa-skull" />
						<span>filled-tertiary</span>
					</span>
					<span class="badge badge-glass">
						<i class="fa-solid fa-skull" />
						<span>glass</span>
					</span>
					<span class="badge badge-filled-success">
						<i class="fa-solid fa-skull" />
						<span>filled-success</span>
					</span>
					<span class="badge badge-filled-warning">
						<i class="fa-solid fa-skull" />
						<span>filled-warning</span>
					</span>
					<span class="badge badge-filled-error">
						<i class="fa-solid fa-skull" />
						<span>filled-error</span>
					</span>
				</div>
			</section>
		</section>
		<!-- Overlapping -->
		<section class="space-y-4">
			<h2>Overlapping Icon</h2>
			<p>Use Tailwind utility classes to create overlapping elements.</p>
			<CodeBlock
				language="html"
				code={`
<div class="relative inline-block">
	<span class="badge-icon badge-filled-primary absolute -top-1 -right-1 z-10">💀</span>
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
