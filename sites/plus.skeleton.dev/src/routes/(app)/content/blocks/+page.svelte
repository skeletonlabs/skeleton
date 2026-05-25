<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { dialogDrawerRight } from '$lib/components/modal-styles';
	import { iconMap } from '$lib/remote/blocks/block-icons';
	import { getFrameworks, getBlocks, getCategories } from '$lib/remote/blocks/get-blocks.remote';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog, Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const [frameworks, categories, blocks] = $derived(await Promise.all([getFrameworks(), getCategories(), getBlocks()]));

	let drawerOpen = $state(false);
	let searchQuery = $state('');
	let selectedFramework = $state('svelte');

	const selectedFrameworkLabel = $derived(frameworks.find((f) => f.key === selectedFramework)?.label ?? 'Svelte');

	const filteredBlocks = $derived(
		searchQuery.trim() ? blocks.filter((b) => b.label.toLowerCase().includes(searchQuery.trim().toLowerCase())) : blocks,
	);
</script>

<!-- Modal: Filters -->
<Dialog preventScroll={false} open={drawerOpen} onOpenChange={({ open }: { open: boolean }) => (drawerOpen = open)}>
	<Portal>
		<!-- <Dialog.Backdrop class={dialogDrawerRight.backdrop} /> -->
		<Dialog.Positioner class={dialogDrawerRight.positioner}>
			<Dialog.Content class={dialogDrawerRight.content}>
				<header class="p-4 flex justify-between items-center">
					<Dialog.Title class="font-semibold">Filters</Dialog.Title>
					<Dialog.CloseTrigger class="btn-icon preset-tonal">
						<XIcon />
					</Dialog.CloseTrigger>
				</header>
				<hr class="hr" />
				<!-- Search -->
				<div class="p-4">
					<div class="field-group grid-cols-[auto_1fr]">
						<label class="label label-text preset-tonal" for="block-search" aria-label="Search">
							<SearchIcon class="size-elem-sm" aria-hidden="true" />
						</label>
						<input class="input" id="block-search" type="search" placeholder="Search..." bind:value={searchQuery} />
					</div>
				</div>
				<hr class="hr" />
				<!-- Categories -->
				<div class="p-4 space-y-2">
					<p class="text-xs font-semibold uppercase tracking-widest opacity-60">Categories</p>
					<ul class="space-y-1">
						{#each categories as category (category.id)}
							<li>
								<a
									href="/content/blocks#{category.id}"
									class="w-full btn hover:preset-tonal justify-between"
									onclick={() => (drawerOpen = false)}
								>
									<span>{category.label}</span>
									<span class="text-xs opacity-60">{filteredBlocks.filter((b) => b.category === category.id).length}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>

{#snippet categorySection(id: string, heading: string)}
	{@const sectionBlocks = filteredBlocks
		.filter((b) => b.category === id && (b.frameworkCounts[selectedFramework] ?? 0) > 0)
		.sort((a, b) => a.label.localeCompare(b.label))}
	<section {id} class="scroll-mt-header space-y-4">
		<header>
			<h2 class="h2">{heading}</h2>
		</header>
		{#if sectionBlocks.length > 0}
			<div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{#each sectionBlocks as item (item.slug)}
					{@const Icon = iconMap[item.iconName]}
					<a
						href="/content/blocks/{item.category}/{item.slug}"
						class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden"
					>
						<header class="aspect-video preset-tonal-primary flex justify-center items-center">
							<Icon class="size-elem-8xl stroke-[1px] opacity-60" />
						</header>
						<footer class="p-4 flex items-center justify-between">
							<span class="text-sm font-medium truncate">{item.label}</span>
							<span class="text-xs opacity-60">{item.frameworkCounts[selectedFramework] ?? 0}</span>
						</footer>
					</a>
				{/each}
			</div>
		{:else}
			<p class="opacity-60">Currently no components available for this category.</p>
		{/if}
	</section>
{/snippet}

<!-- Page Header -->
<PageHeader title="Blocks">
	{#snippet description()}
		<p class="opacity-60">Partial interface sections for use within your Skeleton app.</p>
	{/snippet}
	{#snippet trail()}
		<!-- Framework Picker -->
		<Menu>
			<Menu.Trigger class="btn preset-filled">
				<span>{selectedFrameworkLabel}</span>
				<ChevronDownIcon />
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content class="z-50">
						{#each frameworks as fw (fw.key)}
							<Menu.OptionItem
								type="radio"
								value={fw.key}
								checked={selectedFramework === fw.key}
								onCheckedChange={(checked) => {
									if (checked) selectedFramework = fw.key;
								}}
							>
								<Menu.ItemText>{fw.label}</Menu.ItemText>
								<Menu.ItemIndicator class="hidden data-[state=checked]:block">
									<CheckIcon class="size-4" />
								</Menu.ItemIndicator>
							</Menu.OptionItem>
						{/each}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
		<button type="button" class="btn preset-outlined" onclick={() => (drawerOpen = !drawerOpen)}>
			<SearchIcon />
			<span>Search</span>
		</button>
	{/snippet}
</PageHeader>

<!-- Category Grids -->
<div class="container-page space-y-10">
	{#each categories as category (category.id)}
		{@render categorySection(category.id, category.label)}
	{/each}
</div>
