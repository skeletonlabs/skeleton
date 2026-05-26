<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { dialogDrawerRight } from '$lib/components/modal-styles';
	import FrameworkPicker, { frameworkList } from '$lib/components/utlity/framework-picker.svelte';
	import { iconMap } from '$lib/remote/blocks/block-icons';
	import { getBlocks, getCategories } from '$lib/remote/blocks/get-blocks.remote';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';

	const [categories, blocks] = $derived(await Promise.all([getCategories(), getBlocks()]));

	let drawerOpen = $state(false);
	let searchQuery = $state('');

	let selectedFramework = $state(frameworkList[0]);

	const filteredBlocks = $derived(
		searchQuery.trim() ? blocks.filter((b) => b.label.toLowerCase().includes(searchQuery.trim().toLowerCase())) : blocks,
	);

	const blocksByCategory = $derived(
		new Map(
			categories.map((category) => [
				category.id,
				filteredBlocks
					.filter((b) => b.category === category.id && (b.frameworkCounts[selectedFramework.key] ?? 0) > 0)
					.sort((a, b) => a.label.localeCompare(b.label)),
			]),
		),
	);
</script>

<!-- Modal: Filters -->
<Dialog preventScroll={false} open={drawerOpen} onOpenChange={({ open }: { open: boolean }) => (drawerOpen = open)}>
	<Portal>
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

<!-- Page Header -->
<PageHeader title="Blocks">
	{#snippet description()}
		<p class="opacity-60">Building block interface partials to use within your Skeleton app.</p>
	{/snippet}
	{#snippet trail()}
		<FrameworkPicker onSelect={(fw) => (selectedFramework = fw)} />
		<button type="button" class="btn-icon preset-outlined" onclick={() => (drawerOpen = !drawerOpen)} title="Search" aria-label="Search">
			<SearchIcon />
		</button>
	{/snippet}
</PageHeader>

<!-- Categories -->
<div class="container-page space-y-10">
	{#each categories as category (category.id)}
		{@const sectionBlocks = blocksByCategory.get(category.id) ?? []}
		<section id={category.id} class="scroll-mt-header space-y-4">
			<!-- Header -->
			<header>
				<h2 class="h2">{category.label}</h2>
			</header>
			<!-- Block Grids -->
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
								<span class="text-xs opacity-60">{item.frameworkCounts[selectedFramework.key] ?? 0}</span>
							</footer>
						</a>
					{/each}
				</div>
			{:else}
				<!-- Fallback Message -->
				<p class="opacity-60">Currently no components available for this category.</p>
			{/if}
		</section>
	{/each}
</div>
