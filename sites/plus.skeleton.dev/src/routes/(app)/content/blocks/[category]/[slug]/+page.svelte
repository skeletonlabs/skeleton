<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Preview from '$lib/components/utlity/preview.svelte';
	import { getBlockBySlug, getFrameworks } from '$lib/remote/blocks/get-blocks.remote';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import type { Component } from 'svelte';

	const block = $derived(await getBlockBySlug());
	const frameworks = $derived(await getFrameworks());

	// Svelte Modules
	const allSvelteModules = import.meta.glob<{ default: Component }>('/src/lib/content/{free,premium}/blocks/*/*/svelte/*.svelte');

	// Framework Selection
	const availableFrameworks = $derived(block ? frameworks.filter((f) => block.frameworks.includes(f.key)) : []);
	let selectedFramework = $state('svelte');

	const selectedMeta = $derived(frameworks.find((f) => f.key === selectedFramework));
	const selectedLabel = $derived(selectedMeta?.label ?? 'Svelte');
	const selectedLang = $derived(selectedMeta?.lang ?? selectedFramework);

	function parsePreviewName(name: string): string {
		return name
			.replace(/^\d+-/, '')
			.split('-')
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ');
	}

	// Find a Svelte module loader by searching glob keys for matching path segments
	// Avoids depending on the exact key prefix Vite uses when resolving the $lib alias
	function findSvelteLoader(tier: 'free' | 'premium', category: string, slug: string, name: string) {
		const suffix = `/${tier}/blocks/${category}/${slug}/svelte/${name}.svelte`;
		const key = Object.keys(allSvelteModules).find((k) => k.endsWith(suffix));
		return key ? allSvelteModules[key] : undefined;
	}
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
							{#each availableFrameworks as fw (fw.key)}
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

<!-- Component Previews -->
<div class="container-page space-y-10">
	{#if block}
		{#each block.components as component (component.tier + component.name)}
			{@const svelteLoader = findSvelteLoader(component.tier, block.category, block.slug, component.name)}
			<Preview
				title={parsePreviewName(component.name)}
				code={component.code[selectedFramework] ?? ''}
				lang={selectedLang}
				locked={component.tier === 'premium'}
			>
				{#if svelteLoader}
					{#await svelteLoader() then mod}
						{@const Component = mod.default}
						<Component />
					{/await}
				{:else}
					<p class="opacity-60 italic">(Svelte Preview Missing)</p>
				{/if}
			</Preview>
		{/each}
	{/if}
</div>
