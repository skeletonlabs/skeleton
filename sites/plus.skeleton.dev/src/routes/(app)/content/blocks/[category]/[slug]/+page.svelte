<script lang="ts">
	import { page } from '$app/state';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Preview from '$lib/components/utlity/preview.svelte';
	import { getBlock, getFrameworks } from '$lib/remote/blocks/get-blocks.remote';
	import { svelteModules } from '$lib/remote/blocks/svelte-modules';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import { untrack, type Component } from 'svelte';

	const category = $derived(page.params.category ?? '');
	const slug = $derived(page.params.slug ?? '');

	const [frameworks, block] = $derived(await Promise.all([getFrameworks(), getBlock({ category, block: slug })]));

	const svelteComponents = $derived(
		await Promise.all(
			(block?.examples.svelte ?? []).map(async (ex) => {
				const loader = svelteModules[ex.path];
				return loader ? ((await loader()) as { default: Component }).default : undefined;
			}),
		),
	);

	let selectedFrameworkKey = $state(untrack(() => frameworks[0]?.key ?? ''));
	const selectedFrameworkLabel = $derived(frameworks.find((f) => f.key === selectedFrameworkKey));
</script>

{#if block}
	<PageHeader title={block.label}>
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
	{#each block?.examples.svelte ?? [] as svelteExample, i (svelteExample.title)}
		{@const frameworkExamples = block?.examples[selectedFrameworkKey] ?? []}
		{@const match = frameworkExamples.find((e) => e.title === svelteExample.title) ?? svelteExample}
		{@const BlockComponent = svelteComponents?.[i]}
		<Preview title={svelteExample.title} code={match.code} lang={match.lang} locked={svelteExample.isPremium}>
			{#if BlockComponent}<BlockComponent />{/if}
		</Preview>
	{/each}
</div>
