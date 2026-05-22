<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { iconMap } from '$lib/remote/blocks/block-icons';
	import { getFrameworks, getBlocks, getCategories } from '$lib/remote/blocks/get-blocks.remote';
	import LockIcon from '@lucide/svelte/icons/lock';
	import SearchIcon from '@lucide/svelte/icons/search';

	const frameworks = $derived(await getFrameworks());
	const categories = $derived(await getCategories());
	const blocks = $derived(await getBlocks());
</script>

{#snippet categorySection(id: string, heading: string)}
	<section {id} class="space-y-4">
		<header>
			<h2 class="h2">{heading}</h2>
		</header>
		<div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{#each blocks.filter((b) => b.category === id).sort((a, b) => a.label.localeCompare(b.label)) as item (item.slug)}
				{@const Icon = iconMap[item.iconName]}
				<a href="/content/blocks/{item.category}/{item.slug}" class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden">
					<header class="aspect-video preset-tonal-primary flex justify-center items-center">
						<Icon class="size-elem-8xl stroke-[1px] opacity-60" />
					</header>
					<footer class="p-4 flex items-center justify-between">
						<span class="text-sm font-medium truncate">{item.label}</span>
						<span class="text-xs opacity-60">{item.count}</span>
					</footer>
				</a>
			{/each}
		</div>
	</section>
{/snippet}

<!-- Page Header -->
<PageHeader title="Blocks">
	{#snippet description()}
		<p class="opacity-60">Pre-built UI sections you use directly into your Skeleton app.</p>
	{/snippet}
	{#snippet trail()}
		<a href="/overview/pricing" class="btn preset-filled">
			<LockIcon />
			<span>Unlock All with Plus</span>
		</a>
	{/snippet}
</PageHeader>

<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] items-start">
	<!-- Category Grids -->
	<div class="container-page space-y-10">
		{@render categorySection('marketing', 'Marketing')}
		{@render categorySection('applications', 'Applications')}
		{@render categorySection('ecommerce', 'Ecommerce')}
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
				{#each categories as category (category.id)}
					<li>
						<a href="/content/blocks#{category.id}" class="w-full btn hover:preset-tonal justify-between">
							<span>{category.label}</span>
							<span class="text-xs opacity-60">{blocks.filter((b) => b.category === category.id).length}</span>
						</a>
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
				{#each frameworks as fw (fw.key)}
					<li class="flex items-center gap-2">
						<input type="checkbox" class="checkbox" id="fw-{fw.key}" />
						<label for="fw-{fw.key}" class="text-sm">{fw.label}</label>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
</div>
