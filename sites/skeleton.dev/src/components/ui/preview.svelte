<script module>
	const presets = [
		'',
		'bg-surface-50-950',
		'bg-primary-500',
		'bg-secondary-500',
		'bg-tertiary-500',
		'bg-success-500',
		'bg-warning-500',
		'bg-error-500',
		'bg-surface-500',
		'bg-linear-to-br from-primary-500 to-secondary-500',
		'bg-linear-to-br from-secondary-500 to-tertiary-500',
		'bg-linear-to-br from-tertiary-500 to-primary-500',
	];
	let activePreset = $state(presets[0]);
</script>

<script lang="ts">
	import OpenInStackblitz from './open-in-stackblitz.svelte';
	import Code from '@/components/ui/code.svelte';
	import { EyeIcon, CodeIcon, PaletteIcon } from '@lucide/svelte';
	import { Tabs, ToggleGroup } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		framework?: CollectionEntry<'frameworks'>['id'];
		files?: Record<string, string>;
	}

	const { children, framework, files = {} }: Props = $props();

	let viewMode = $state('preview');
	let customizeMode = $state('');

	const fileEntries = $derived(Object.entries(files));
</script>

<div class="card border border-surface-200-800 max-w-full">
	<!-- Header -->
	<header class="flex justify-between items-center gap-3 border-b border-surface-200-800 p-3">
		<!-- Mode -->
		<ToggleGroup value={[viewMode]} onValueChange={(details) => (viewMode = details.value[0])} deselectable={false}>
			<ToggleGroup.Item value="preview" class="data-[state=on]:preset-tonal text-surface-contrast-50-950">
				<EyeIcon class="size-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="code" class="data-[state=on]:preset-tonal text-surface-contrast-50-950">
				<CodeIcon class="size-4" />
			</ToggleGroup.Item>
		</ToggleGroup>

		<!-- Customize / Tabs -->
		<ToggleGroup
			value={[customizeMode]}
			onValueChange={(details) => (customizeMode = details.value[0])}
			class="ml-auto {viewMode === 'preview' ? 'block' : 'hidden'}"
		>
			<ToggleGroup.Item value="customize" class="data-[state=on]:preset-tonal text-surface-contrast-50-950">
				<PaletteIcon class="size-4" />
			</ToggleGroup.Item>
		</ToggleGroup>

		<!-- Stackblitz -->
		{#if framework}
			<OpenInStackblitz {framework} {files} />
		{/if}
	</header>

	<!-- Presets -->
	<div
		class="border-b border-surface-200-800 p-3 flex items-center gap-3 {viewMode === 'preview' && customizeMode === 'customize'
			? 'block'
			: 'hidden'}"
	>
		{#each presets as preset, i (preset)}
			<button
				type="button"
				class="flex-1 w-full aspect-square rounded-full hover:brightness-110 {preset}"
				class:border={[0, 1].includes(i)}
				class:border-surface-200-800={[0, 1].includes(i)}
				onclick={() => (activePreset = preset)}
			>
				<span class="sr-only">{preset}</span>
			</button>
		{/each}
	</div>

	<!-- Panel: Children -->
	<div class="p-8 flex justify-center items-center {activePreset} {viewMode === 'preview' && children ? 'block' : 'hidden'}">
		{@render children?.()}
	</div>

	<!-- Panel: Files -->
	<Tabs defaultValue={fileEntries[0]?.[0]} class="p-3 overflow-x-auto {viewMode === 'code' && files ? 'block' : 'hidden'}">
		{#if fileEntries.length > 1}
			<Tabs.List>
				{#if files}
					{#each fileEntries as [file] (file)}
						<Tabs.Trigger value={file}>{file}</Tabs.Trigger>
					{/each}
				{/if}
				<Tabs.Indicator />
			</Tabs.List>
		{/if}

		{#each fileEntries as [file, content] (file)}
			<Tabs.Content value={file}>
				<Code code={content} lang={file.split('.').pop()} />
			</Tabs.Content>
		{/each}
	</Tabs>
</div>
