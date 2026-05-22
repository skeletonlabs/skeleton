<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getBlockBySlug, getFrameworks } from '$lib/remote/blocks/get-blocks.remote';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const detail = $derived(await getBlockBySlug());
	const frameworks = $derived(await getFrameworks());

	let selectedFramework = $state('svelte');
	const selectedLabel = $derived(frameworks.find((f) => f.key === selectedFramework)?.label ?? 'Svelte');
</script>

{#if detail}
	<PageHeader title={detail.item.label}>
		{#snippet description()}
			<p class="opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		{/snippet}
		{#snippet trail()}
			<!-- Framework Selection -->
			<Menu>
				<Menu.Trigger class="btn preset-filled">
					<span>{selectedLabel}</span>
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
		{/snippet}
	</PageHeader>

	<!-- Placeholder -->
	<div class="container-page">
		<div class="card bg-surface-50-950 border border-surface-200-800 p-10 text-center space-y-2">
			<p class="opacity-60">Preview Blocks Here</p>
		</div>
	</div>
{/if}
