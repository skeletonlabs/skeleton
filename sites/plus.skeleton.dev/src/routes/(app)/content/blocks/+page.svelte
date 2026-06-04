<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { dialogDrawerRight } from '$lib/components/modal-styles';
	import { iconMap } from '$lib/remote/blocks/block-icons';
	import { getFrameworks, getBlocks, type BlockCategory } from '$lib/remote/blocks/get-blocks.remote';
	import LockIcon from '@lucide/svelte/icons/lock';
	import SearchIcon from '@lucide/svelte/icons/search';
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';

	const [frameworks, blocks] = $derived(await Promise.all([getFrameworks(), getBlocks()]));

	let drawerOpen = $state(false);
	let searchQuery = $state('');

	const filteredBlocks = $derived(
		searchQuery.trim()
			? (Object.fromEntries(
					Object.entries(blocks).map(([cat, items]) => [
						cat,
						items.filter((b) => b.name.toLowerCase().includes(searchQuery.trim().toLowerCase())),
					]),
				) as Record<string, BlockCategory[]>)
			: blocks,
	);
</script>

<!-- Modal: Filters -->
<Dialog preventScroll={false} open={drawerOpen} onOpenChange={({ open }) => (drawerOpen = open)}>
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
						{#each Object.entries(blocks) as [id] (id)}
							<li>
								<a href="/content/blocks#{id}" class="w-full btn hover:preset-tonal justify-between" onclick={() => (drawerOpen = false)}>
									<span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
									<span class="text-xs opacity-60">{(filteredBlocks[id as string] ?? []).length}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<hr class="hr" />
				<!-- Framework -->
				<!-- TODO: implement -->
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
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>

<!-- Page Header -->
<PageHeader title="Blocks">
	{#snippet description()}
		<p class="opacity-60">Partial interface sections for use within your Skeleton app.</p>
	{/snippet}
	{#snippet trail()}
		<a href="/overview/pricing" class="btn preset-filled">
			<LockIcon />
			<span>Unlock All Blocks</span>
		</a>
		<button type="button" class="btn preset-outlined" onclick={() => (drawerOpen = !drawerOpen)}>
			<SearchIcon />
			<span>Search</span>
		</button>
	{/snippet}
</PageHeader>

<!-- Category List -->
<div class="container-page space-y-10">
	{#each Object.entries(filteredBlocks) as [id, items] (id)}
		{@const sectionBlocks = items.sort((a, b) => a.name.localeCompare(b.name))}
		{#if sectionBlocks.length > 0}
			<!-- Category -->
			<section {id} class="scroll-mt-header space-y-4">
				<header>
					<h2 class="h2 capitalize">{id}</h2>
				</header>
				<!-- Blocks Grid -->
				<div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{#each sectionBlocks as item (item.name)}
						{@const Icon = iconMap[item.meta.iconName]}
						<!-- Block -->
						<a href="/content/blocks/{id}/{item.name}" class="card bg-surface-50-950 border border-surface-200-800 overflow-hidden">
							<header class="aspect-video preset-tonal-primary flex justify-center items-center">
								<Icon class="size-elem-8xl stroke-[1px] opacity-60" />
							</header>
							<footer class="p-4 flex items-center justify-between">
								<span class="text-sm font-medium truncate">{item.name}</span>
								<span class="text-xs opacity-60">{item.svelte}</span>
							</footer>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	{/each}
</div>
