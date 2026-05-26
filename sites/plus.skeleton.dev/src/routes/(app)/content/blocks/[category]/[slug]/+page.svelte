<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import FrameworkPicker, { frameworkList } from '$lib/components/utlity/framework-picker.svelte';
	import Preview from '$lib/components/utlity/preview.svelte';
	import { getBlockBySlug } from '$lib/remote/blocks/get-blocks.remote';
	import type { Component } from 'svelte';

	const block = $derived(await getBlockBySlug());
	const allSvelteModules = import.meta.glob<{ default: Component }>('/src/lib/content/{free,premium}/blocks/*/*/svelte/*.svelte');

	let selectedFramework = $state(frameworkList[0]);

	function formatTitle(name: string): string {
		return name
			.replace(/^\d+-/, '')
			.split('-')
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ');
	}

	function findSvelteLoader(tier: 'free' | 'premium', category: string, slug: string, name: string) {
		const suffix = `/${tier}/blocks/${category}/${slug}/svelte/${name}.svelte`;
		const key = Object.keys(allSvelteModules).find((k) => k.endsWith(suffix));
		return key ? allSvelteModules[key] : undefined;
	}
</script>

<!-- Page Header -->
{#if block}
	<PageHeader title={block.label}>
		{#snippet description()}
			<p class="opacity-60">{block.description}</p>
		{/snippet}
		{#snippet trail()}
			<FrameworkPicker available={block.frameworks} onSelect={(fw) => (selectedFramework = fw)} />
		{/snippet}
	</PageHeader>
{/if}

<!-- Previews -->
<div class="container-page space-y-10">
	{#if block}
		{#each block.components as component (component.tier + component.name)}
			{@const svelteLoader = findSvelteLoader(component.tier, block.category, block.slug, component.name)}
			<Preview
				title={formatTitle(component.name)}
				code={component.code[selectedFramework.key]}
				lang={selectedFramework.lang}
				locked={component.tier === 'premium'}
			>
				{#if svelteLoader}
					{#await svelteLoader() then mod}
						{@const BlockPreview = mod.default}
						<BlockPreview />
					{/await}
				{:else}
					<p class="opacity-60 italic">(Svelte Preview Missing)</p>
				{/if}
			</Preview>
		{/each}
	{/if}
</div>
