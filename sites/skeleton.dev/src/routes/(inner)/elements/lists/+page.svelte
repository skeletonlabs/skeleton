<script lang="ts">
	import { faker } from '@faker-js/faker';
	// Docshell
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import DocsPreview from '$docs/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Lists',
		description: 'Provides styles for static list elements.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/lists'],
		source: 'styles/elements/lists.css',
		classes: [
			['<code class="code">.list</code>', '-', 'Class for defining an unordered or ordered list.'],
			['<code class="code">.list-dl</code>', '-', 'Class for defining a description list.'],
			['<code class="code">.list-nav</code>', '-', 'Class for defining a navigation list.'],
			['<code class="code">.list-option</code>', '-', 'Provides hover styles similar to anchors.']
		]
	};

	// Local
	const listData = [
		{ avatar: 'YOErFW8AfkI', name: `${faker.name.firstName('female')} ${faker.name.lastName('female')}`, label: 'A' },
		{ avatar: 'z_X0PxmBuIQ', name: `${faker.name.firstName('female')} ${faker.name.lastName('female')}`, label: 'B' },
		{ avatar: '8vKVlNIbAc4', name: `${faker.name.firstName('female')} ${faker.name.lastName('female')}`, label: 'C' }
	];
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<section class="w-full text-token card p-4 space-y-4">
					<p class="font-bold">Unordered List</p>
					<ul class="list">
						{#each listData as v, i}
							<li>
								<Avatar src="https://source.unsplash.com/{v.avatar}/48x48" width="w-12" />
								<span class="flex-auto">{v.name}</span>
								<span>⋮</span>
							</li>
						{/each}
					</ul>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="source">
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
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Apply the <code class="code">.list</code> class to the parent. Wrap children with <em>span</em> elements to allow for horizontal spacing.
		</p>
		<!-- Ordered -->
		<section class="space-y-4">
			<h2 class="h2">Ordered List</h2>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token card p-4 space-y-4">
						<ol class="list">
							{#each listData as v, i}
								<li>
									<span class="badge-icon p-4 variant-soft-primary">{i + 1}</span>
									<span class="flex-auto">
										Numbered Item {v.label}
									</span>
									<span>⋮</span>
								</li>
							{/each}
						</ol>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
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
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Description -->
		<section class="space-y-4">
			<h2 class="h2">Description List</h2>
			<p>Note we insert an extra <em>div</em> element to control flex layout and aid with vertical list item spacing.</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token card p-4 space-y-4">
						<dl class="list-dl">
							{#each listData as v}
								<div>
									<span class="badge-icon p-4 variant-soft-secondary"><i class="fa-solid fa-book" /></span>
									<span class="flex-auto">
										<dt class="font-bold">Item {v.label}</dt>
										<dd class="text-sm opacity-50">Description for {v.label}</dd>
									</span>
									<span>⋮</span>
								</div>
							{/each}
						</dl>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="source">
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
				</svelte:fragment>
			</DocsPreview>
		</section>
		<!-- Navigation -->
		<section class="space-y-4">
			<h2 class="h2">Navigation List</h2>
			<!-- prettier-ignore -->
			<p>
				While verbose, we do recommend you use all tags shown below to meet recommended <a class="anchor" href="https://www.w3.org/WAI/tutorials/menus/structure/" target="_blank" rel="noreferrer">accessibility guidelines</a>.
			</p>
			<DocsPreview background="neutral">
				<svelte:fragment slot="preview">
					<div class="w-full text-token card p-4 space-y-4">
						<nav class="list-nav">
							<ul>
								{#each listData as v}
									<li>
										<a href="/elements/lists">
											<span class="badge-icon p-4 variant-soft-tertiary"><i class="fa-solid fa-arrow-right" /></span>
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
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<nav class="list-nav">
	<!-- (optionally you can provide a label here) -->
	<ul>
		<li>
			<a href="/elements/lists">
				<span class="badge bg-primary-500">💀</span>
				<span class="flex-auto">Skeleton</span>
			</a>
		</li>
		<!-- ... -->
	</ul>
</nav>
`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<p>To highlight active state, we recommend conditionally applying a background color to the anchor tag.</p>
			<CodeBlock language="ts" code={`$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');`} />
			<CodeBlock language="html" code={`<a {href} class="{classesActive(href)}">Page</a>`} />
		</section>
	</svelte:fragment>
</DocsShell>
