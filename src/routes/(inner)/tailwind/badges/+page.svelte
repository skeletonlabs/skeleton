<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings, type DocsShellTable } from '$docs/DocsShell/types';

	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Badges',
		description: 'Provides a robust set of badge styles',
		stylesheetIncludes: ['core', 'elements'],
		stylesheets: ['elements/badges'],
		source: 'styles/elements/badges.css'
	};
	const classes: DocsShellTable[] = [
		{
			headings: ['Class', 'Description'],
			source: [
				['<code>badge</code>', 'Provides the standard badge style.'],
				['<code>badge-icon</code>', 'Provides the icon badge style.']
			]
		}
	];
</script>

<DocsShell {settings} {classes}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<!-- - -->
			<div class="card card-body">
				<span class="badge bg-surface-500 text-white">Skeleton</span>
			</div>
			<!-- - -->
			<div class="lg:col-span-2 card card-body">
				<span class="badge bg-primary-500 text-white">
					<span>&hearts;</span>
					<span>Complete</span>
				</span>
				<span class="badge bg-accent-500 text-white">
					<span>Skeleton</span>
					<span>💀</span>
				</span>
				<span class="badge bg-ternary-500 text-white">
					<span>&hearts;</span>
					<span>Favorite</span>
				</span>
			</div>
			<!-- - -->
			<div class="card card-body">
				<h4>Skeleton</h4>
				<sup class="badge bg-primary-500 text-white -ml-0">Sup</sup>
			</div>
			<!-- - -->
			<div class="card card-body">
				<h4>Skeleton</h4>
				<sub class="badge bg-accent-500 text-white -ml-0">Sub</sub>
			</div>
			<!-- - -->
			<div class="card card-body !space-x-6">
				<div class="relative inline-block">
					<span class="badge bg-primary-500 text-white absolute -top-3 -right-4 z-10">50k</span>
					<button class="btn btn-sm btn-ghost">Button</button>
				</div>
				<div class="relative inline-block">
					<span class="badge-icon bg-accent-500 text-white absolute -top-1 -right-1 z-10">2</span>
					<Avatar />
				</div>
				<div class="relative inline-block">
					<span class="badge-icon bg-ternary-500 text-white absolute -top-1 -right-1 z-10">&hearts;</span>
					<Avatar />
				</div>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>Apply to any inline element, such as a <em>span</em> or <em>anchor</em> tag.</p>
			<CodeBlock language="html" code={`<span class="badge bg-primary-500">Skeleton</span>`} />
		</section>
		<!-- Icon -->
		<section class="space-y-4">
			<h2>Badge Icon</h2>
			<p>A compact circular variation badge style.</p>
			<CodeBlock language="html" code={`<span class="badge-icon bg-primary-500">💀</span>`} />
		</section>
		<!-- Overlapping -->
		<section class="space-y-4">
			<h2>Overlapping Icon</h2>
			<p>Use Tailwind utility classes to create overlapping elements.</p>
			<CodeBlock
				language="html"
				code={`
<div class="relative inline-block">
    <span class="badge-icon bg-primary-500 absolute -top-1 -right-1 z-10">💀</span>
    <Avatar />
</div>
		`.trim()}
			/>
		</section>
		<!-- Global Styles -->
		<section class="space-y-4">
			<h2>Global Styles</h2>
			<p>Use your global stylesheet to update all instances of this element.</p>
			<CodeBlock language="css" code={`.badge { @apply rounded-full; }`} />
		</section>
	</svelte:fragment>
</DocsShell>

<style lang="postcss">
	.card-body {
		@apply flex justify-center items-center space-x-2;
	}
</style>
