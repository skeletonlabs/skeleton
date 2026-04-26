<script module>
	const presets = [
		'',
		'bg-surface-50-950',
		'preset-filled-primary-500',
		'preset-filled-secondary-500',
		'preset-filled-tertiary-500',
		'preset-filled-success-500',
		'preset-filled-warning-500',
		'preset-filled-error-500',
		'preset-filled-surface-500',
		'bg-linear-to-br from-primary-500 to-secondary-500',
		'bg-linear-to-br from-secondary-500 to-tertiary-500',
		'bg-linear-to-br from-tertiary-500 to-primary-500',
	];
	let activePreset = $state(presets[0]);
	let direction = $state<'ltr' | 'rtl'>('ltr');
</script>

<script lang="ts">
	import OpenInStackblitz from './open-in-stackblitz.svelte';
	import Code from '@/components/ui/code.svelte';
	import CodeIcon from '@lucide/svelte/icons/code';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import { Tabs, ToggleGroup } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		framework?: CollectionEntry<'frameworks'>['id'];
		files?: Record<string, string>;
		learnUrl?: string;
	}

	const { children, framework, files = {}, learnUrl }: Props = $props();

	let viewMode = $state('preview');
	let customizeMode = $state('');

	const fileEntries = $derived(Object.entries(files));
</script>

<div class="card border border-surface-200-800 max-w-full overflow-hidden">
	<!-- Header -->
	<header class="flex justify-between items-center gap-3 border-b border-surface-200-800 p-3">
		<!-- Actions Right -->
		<div class="flex items-center gap-2">
			<!-- Toggle Mode -->
			<ToggleGroup value={[viewMode]} onValueChange={(details) => (viewMode = details.value[0])} deselectable={false}>
				<ToggleGroup.Item
					value="preview"
					class="data-[state=on]:preset-tonal text-surface-contrast-50-950"
					title="Preview Feature"
					aria-label="Preview Feature"
				>
					<EyeIcon class="size-4" />
				</ToggleGroup.Item>
				<ToggleGroup.Item
					value="code"
					class="data-[state=on]:preset-tonal text-surface-contrast-50-950"
					title="View Code"
					aria-label="View Code"
				>
					<CodeIcon class="size-4" />
				</ToggleGroup.Item>
			</ToggleGroup>

			<!-- Learn More URL -->
			{#if learnUrl}
				<a
					href={learnUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn preset-outlined-surface-200-800 hover:preset-tonal"
					title="Learn how to use this feature."
					aria-label="Learn how to use this feature."
				>
					Learn
				</a>
			{/if}
		</div>

		<!-- Actions Right -->
		<div class="flex items-center gap-2">
			<!-- LTR/RTL Toggle -->
			<ToggleGroup
				value={direction === 'rtl' ? ['rtl'] : []}
				onValueChange={(details) => (direction = details.value[0] === 'rtl' ? 'rtl' : 'ltr')}
				class={viewMode === 'preview' ? 'block' : 'hidden'}
			>
				<ToggleGroup.Item
					value="rtl"
					class="data-[state=on]:preset-tonal text-surface-contrast-50-950"
					title="Toggle LTR/RTL Modes"
					aria-label="Toggle LTR/RTL Modes"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="size-4">
						<text x="8" y="12" text-anchor="middle" font-size="9" font-weight="bold" font-family="sans-serif">
							{direction.toUpperCase()}
						</text>
					</svg>
				</ToggleGroup.Item>
			</ToggleGroup>

			<!-- Customize / Tabs -->
			<ToggleGroup
				value={[customizeMode]}
				onValueChange={(details) => (customizeMode = details.value[0])}
				class={viewMode === 'preview' ? 'block' : 'hidden'}
			>
				<ToggleGroup.Item
					value="customize"
					class="data-[state=on]:preset-tonal text-surface-contrast-50-950"
					title="Customize"
					aria-label="Customize"
				>
					<PaletteIcon class="size-4" />
				</ToggleGroup.Item>
			</ToggleGroup>

			<!-- Stackblitz -->
			{#if framework}
				<OpenInStackblitz {framework} {files} />
			{/if}
		</div>
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
	<div
		dir={direction}
		class="p-8 flex justify-center items-center {activePreset} {viewMode === 'preview' && children ? 'block' : 'hidden'}"
	>
		{@render children?.()}
	</div>

	<!-- Panel: Files -->
	<Tabs defaultValue={fileEntries[0]?.[0]} class="p-3 {viewMode === 'code' && files ? 'block' : 'hidden'}">
		{#if fileEntries.length > 1}
			<Tabs.List class="overflow-x-auto">
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
