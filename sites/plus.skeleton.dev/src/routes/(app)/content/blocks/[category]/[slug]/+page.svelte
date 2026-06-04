<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Preview from '$lib/components/utlity/preview.svelte';
	import { getBlockBySlug, getFrameworks } from '$lib/remote/blocks/get-blocks.remote';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const block = $derived(await getBlockBySlug());
	const frameworks = $derived(await getFrameworks());

	let selectedFrameworkKey = $derived(frameworks[0].key);
	const selectedFrameworkLabel = $derived(frameworks.find((f) => f.key === selectedFrameworkKey));
</script>

{#if block}
	<PageHeader title={block.name}>
		{#snippet description()}
			<p class="opacity-60">{block.meta.description}</p>
		{/snippet}
		{#snippet trail()}
			<!-- Framework Selection -->
			<Menu>
				<Menu.Trigger class="btn preset-filled">
					<span>{selectedFrameworkLabel?.label}</span>
					<ChevronDownIcon />
				</Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content class="z-50">
							{#each frameworks as fw (fw.key)}
								<Menu.OptionItem
									type="radio"
									value={fw.key}
									checked={selectedFrameworkKey === fw.key}
									onCheckedChange={(checked) => {
										if (checked) selectedFrameworkKey = fw.key;
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
{/if}

<!-- Examples -->
<div class="container-page space-y-10">
	{#each Object.entries(block?.examples ?? {}) as [framework, examples] (framework)}
		{#if framework === selectedFrameworkKey}
			{#each examples as { title, code, lang, isPremium }, i (i)}
				<Preview {title} {code} {lang} locked={isPremium}>
					<!-- NOTE: this is a placeholder for a component -->
					{@html code}
				</Preview>
			{/each}
		{/if}
	{/each}
</div>
