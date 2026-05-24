<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Preview from '$lib/components/utlity/preview.svelte';
	import { getBlockBySlug, getFrameworks } from '$lib/remote/blocks/get-blocks.remote';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const block = $derived(await getBlockBySlug());
	const frameworks = $derived(await getFrameworks());

	let selectedFramework = $state('svelte');
	const selectedLabel = $derived(frameworks.find((f) => f.key === selectedFramework)?.label ?? 'Svelte');

	const blockExamples = [
		{ title: 'Example 1', code: '<h1 class="h1">Hello World</h1>', lang: 'svelte' },
		{ title: 'Example 2', code: '<h2 class="h2">Hello World</h2>', lang: 'svelte' },
		{ title: 'Example 3', code: '<h3 class="h3">Hello World</h3>', lang: 'svelte' },
	];
</script>

{#if block}
	<PageHeader title={block.label}>
		{#snippet description()}
			<p class="opacity-60">{block.description}</p>
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
{/if}

<!-- Examples -->
<div class="container-page space-y-10">
	{#each blockExamples as { title, code, lang } (title)}
		<Preview {title} {code} {lang} />
	{/each}
</div>
