<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import LockIcon from '@lucide/svelte/icons/lock';
	import SearchIcon from '@lucide/svelte/icons/search';

	const categories = [
		{ label: 'All blocks', count: null },
		{ label: 'Marketing', count: 82 },
		{ label: 'Application UI', count: 194 },
		{ label: 'Ecommerce', count: 98 },
		{ label: 'Forms', count: 38 },
		{ label: 'Page examples', count: 45 },
	];

	const frameworks = ['React', 'Svelte', 'Vue', 'Solid.js', 'Astro'];

	const blockGroups = [
		{
			label: 'Marketing',
			count: 148,
			items: [
				{ label: 'Hero sections', count: 8 },
				{ label: 'Feature sections', count: 11 },
				{ label: 'Pricing', count: 14 },
				{ label: 'CTA', count: 17 },
				{ label: 'Headers', count: 20 },
				{ label: 'Footers', count: 23 },
				{ label: 'Testimonials', count: 26 },
				{ label: 'Logo clouds', count: 29 },
			],
		},
		{
			label: 'Application UI',
			count: 148,
			items: [
				{ label: 'Forms', count: 8 },
				{ label: 'Tables', count: 11 },
				{ label: 'Modals', count: 14 },
				{ label: 'Dropdowns', count: 17 },
				{ label: 'Stats', count: 20 },
				{ label: 'Page shells', count: 23 },
				{ label: 'Sidebars', count: 26 },
				{ label: 'Empty states', count: 29 },
			],
		},
		{
			label: 'Ecommerce',
			count: 148,
			items: [
				{ label: 'Product listings', count: 8 },
				{ label: 'Shopping cart', count: 11 },
				{ label: 'Checkout', count: 14 },
				{ label: 'Order summary', count: 17 },
				{ label: 'Product detail', count: 20 },
				{ label: 'Category pages', count: 23 },
				{ label: 'Reviews', count: 26 },
				{ label: 'Promotions', count: 29 },
			],
		},
	];
</script>

<!-- Page Header -->
<PageHeader title="Blocks">
	{#snippet description()}
		<p class="opacity-60">Pre-built UI sections you use directly into your Skeleton app.</p>
	{/snippet}
	{#snippet trail()}
		<a href="/overview/pricing" class="btn preset-filled">
			<LockIcon />
			<span>Unlock with Plus</span>
		</a>
	{/snippet}
</PageHeader>

<!-- Body -->
<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] items-start">
	<!-- Main Content -->
	<div class="container-page space-y-10">
		{#each blockGroups as group (group.label)}
			<section class="space-y-4">
				<header class="flex items-center justify-between">
					<h2 class="h3">{group.label}</h2>
					<a href="/content/blocks/{group.label.toLowerCase().replace(/\s+/g, '-')}" class="btn preset-tonal">
						{group.count} categories
						<ChevronRightIcon class="size-elem-sm" />
					</a>
				</header>
				<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{#each group.items as item (item.label)}
						<a href="/#" class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden">
							<img src="https://placehold.co/640x360/000000/888888?text={item.label.replace(/ /g, '+')}" alt={item.label} class="w-full" />
							<footer class="p-2 flex items-center justify-between">
								<span class="text-sm font-medium">{item.label}</span>
								<span class="text-xs opacity-60">{item.count}</span>
							</footer>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>

	<!-- Right Sidebar -->
	<aside class="hidden lg:block w-60 bg-surface-50-950 border-l border-surface-200-800 self-stretch">
		<!-- Search -->
		<div class="p-4 border-b border-surface-200-800">
			<div class="field-group grid-cols-[auto_1fr]">
				<label class="label label-text preset-tonal" for="block-search" aria-label="Search">
					<SearchIcon class="size-elem-sm" aria-hidden="true" />
				</label>
				<input class="input" id="block-search" type="search" placeholder="Search..." />
			</div>
		</div>
		<!-- Categories -->
		<div class="p-4 border-b border-surface-200-800 space-y-2">
			<p class="text-xs font-semibold uppercase tracking-widest opacity-60">Categories</p>
			<ul class="space-y-1">
				{#each categories as category, i (category.label)}
					<li>
						<button
							type="button"
							class="w-full flex items-center justify-between btn {i === 0 ? 'preset-outlined-surface-200-800' : 'hover:preset-tonal'}"
						>
							<span>{category.label}</span>
							{#if category.count}
								<span class="text-xs opacity-60">{category.count}</span>
							{/if}
						</button>
					</li>
				{/each}
			</ul>
		</div>
		<!-- Type -->
		<div class="p-4 border-b border-surface-200-800 space-y-2">
			<p class="text-xs font-semibold uppercase tracking-widest opacity-60">Type</p>
			<ul class="space-y-2">
				{#each ['Free', 'Plus'] as type (type)}
					<li class="flex items-center gap-2">
						<input type="checkbox" class="checkbox" id="type-{type.toLowerCase()}" />
						<label for="type-{type.toLowerCase()}" class="text-sm">{type}</label>
					</li>
				{/each}
			</ul>
		</div>
		<!-- Framework -->
		<div class="p-4 space-y-2">
			<p class="text-xs font-semibold uppercase tracking-widest opacity-60">Framework</p>
			<ul class="space-y-2">
				{#each frameworks as fw (fw)}
					<li class="flex items-center gap-2">
						<input type="checkbox" class="checkbox" id="fw-{fw.toLowerCase()}" />
						<label for="fw-{fw.toLowerCase()}" class="text-sm">{fw}</label>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
</div>
