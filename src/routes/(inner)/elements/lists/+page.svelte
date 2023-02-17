<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Lists',
		description: 'Provides styles for static list elements.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/lists'],
		source: 'styles/elements/lists.css',
		classes: [
			['<code>.list</code>', '-', 'Class for defining a unordered or ordered list.'],
			['<code>.list-dl</code>', '-', 'Class for defining a description list.'],
			['<code>.list-nav</code>', '-', 'Class for defining a navigation list.'],
			['<code>.list-option</code>', '-', 'Provides hover styles similar to anchors.']
		]
	};

	// Local
	const listData = [
		{ avatar: 48, name: 'Jane', label: 'A', class: 'variant-filled-primary' },
		{ avatar: 64, name: 'Michael', label: 'B', class: 'variant-filled-secondary' },
		{ avatar: 30, name: 'Susan', label: 'C', class: 'variant-filled-tertiary' }
	];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
			<div class="card p-4 space-y-4">
				<p class="font-bold">Unordered</p>
				<ul class="list">
					{#each listData as v, i}
						<li>
							<Avatar src="https://i.pravatar.cc/?img={v.avatar}" width="w-8" />
							<span class="flex-auto">{v.name}</span>
							<span>⋮</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="card p-4 space-y-4">
				<p class="font-bold">Ordered</p>
				<ol class="list">
					{#each listData as v, i}
						<li>
							<span class="badge-icon p-4 bg-surface-500/50">{i + 1}</span>
							<span class="flex-auto">
								Numbered Item {v.label}
							</span>
							<span>⋮</span>
						</li>
					{/each}
				</ol>
			</div>
			<div class="card p-4 space-y-4">
				<p class="font-bold">Description</p>
				<dl class="list-dl">
					{#each listData as v}
						<div>
							<span class="badge-icon p-4 {v.class}"><i class="fa-solid fa-book" /></span>
							<span class="flex-auto">
								<dt class="font-bold">Item {v.label}</dt>
								<dd class="text-sm opacity-50">Description for {v.label}</dd>
							</span>
							<span>⋮</span>
						</div>
					{/each}
				</dl>
			</div>
			<div class="card p-4 space-y-4">
				<p class="font-bold">Navigation</p>
				<nav class="list-nav">
					<ul>
						{#each listData as v}
							<li>
								<a href="/">
									<span class="badge-icon p-4 {v.class}"><i class="fa-solid fa-arrow-right" /></span>
									<span class="flex-auto">
										Nav Item {v.label}
									</span>
									<span>⋮</span>
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<div class="space-y-4">
			<p>
				Apply the <code>.list</code> class to the parent. Wrap children with <em>span</em> elements to allow for horizontal spacing.
			</p>
		</div>
		<!-- Unordered -->
		<div class="space-y-4">
			<h2>Unordered</h2>
			<CodeBlock
				language="html"
				code={`
<ul class="list">
	<li>
		<span>(icon)</span>
		<span class="flex-auto">Skeleton</span>
	</li>
	<!-- ... -->
</ul>
`}
			/>
		</div>
		<!-- Ordered -->
		<div class="space-y-4">
			<h2>Ordered</h2>
			<CodeBlock
				language="html"
				code={`
<ol class="list">
	<li>
		<span>1.</span>
		<span class="flex-auto">Skeleton</span>
	</li>
	<!-- ... -->
</ol>
`}
			/>
		</div>
		<!-- Description -->
		<div class="space-y-4">
			<h2>Description</h2>
			<p>Note we insert an extra <em>div</em> element to control flex layout and aid with vertical list item spacing.</p>
			<CodeBlock
				language="html"
				code={`
<dl class="list-dl">
	<div>
		<span class="badge bg-primary-500">💀</span>
		<span class="flex-auto">
			<dt>Title</dt>
			<dd>Description</dd>
		</span>
	</div>
	<!-- ... -->
</dl>
`}
			/>
		</div>
		<!-- Navigation -->
		<div class="space-y-4">
			<h2>Navigation</h2>
			<p>
				While verbose, we do recommend you use all tags shown below to meet recommended <a
					href="https://www.w3.org/WAI/tutorials/menus/structure/"
					target="_blank"
					rel="noreferrer">accessibility guidelines</a
				>.
			</p>
			<CodeBlock
				language="html"
				code={`
<nav class="list-nav">
	<!-- (optionally you can provde a label here) -->
	<ul>
		<li>
			<a href="/">
				<span class="badge bg-primary-500">💀</span>
				<span class="flex-auto">Skeleton</span>
			</a>
		</li>
		<!-- ... -->
	</ul>
</nav>
`}
			/>
			<p>
				If you need to highlight an active Navigation List item, we recommend conditionally applying a background color to the anchor tag.
			</p>
			<CodeBlock language="ts" code={`$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');`} />
			<CodeBlock language="html" code={`<a {href} class="{classesActive(href)}">Page</a>`} />
		</div>
	</svelte:fragment>
</DocsShell>
