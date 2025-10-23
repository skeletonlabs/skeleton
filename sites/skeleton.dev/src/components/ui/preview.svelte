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
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		framework?: CollectionEntry<'frameworks'>['id'];
		files: Record<string, string>;
	}

	const props: Props = $props();
	const { children, framework, files } = $derived(props);

	let mode: 'preview' | 'code' = $state('preview');
	let menuCustomize = $state(false);
</script>

<div class="card border border-surface-200-800 max-w-full">
	<!-- Header -->
	<header class="flex justify-between items-center gap-3 border-b border-surface-200-800 p-3">
		<!-- Mode -->
		<nav class="inline-flex preset-outlined-surface-200-800 divide-x-[1px] divide-surface-200-800 overflow-hidden rounded-base">
			<button
				class="flex justify-center items-center w-9 aspect-square"
				class:preset-tonal={mode === 'preview'}
				onclick={() => (mode = 'preview')}
			>
				<EyeIcon class="size-4" />
			</button>
			<button
				class="flex justify-center items-center w-9 aspect-square"
				class:preset-tonal={mode === 'code'}
				onclick={() => (mode = 'code')}
			>
				<CodeIcon class="size-4" />
			</button>
		</nav>

		<!-- Customize / Tabs -->
		{#if mode === 'preview'}
			<button
				type="button"
				class="ml-auto btn-icon preset-outlined-surface-200-800 hover:preset-tonal"
				onclick={() => (menuCustomize = !menuCustomize)}
				title="Customize"
				aria-label="Customize"
			>
				<PaletteIcon class="size-4" />
			</button>
		{/if}

		<!-- Stackblitz -->
		{#if framework}
			<OpenInStackblitz {framework} {files} />
		{/if}
	</header>

	<!-- Presets -->
	{#if menuCustomize}
		<div class="border-b border-surface-200-800 p-3 flex items-center gap-3">
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
	{/if}

	<!-- Panel: Children -->
	{#if mode === 'preview' && children}
		<div class="p-8 flex justify-center items-center {activePreset}">
			{@render children()}
		</div>
	{/if}

	<!-- Panel: Files -->
	{#if mode === 'code' && files}
		<div class="p-3">
			<Tabs defaultValue={Object.keys(files)[0]} class="overflow-x-auto">
				{#if Object.keys(files).length > 1}
					<Tabs.List>
						{#if files}
							{#each Object.keys(files) as file (file)}
								<Tabs.Trigger value={file}>{file}</Tabs.Trigger>
							{/each}
						{/if}
						<Tabs.Indicator />
					</Tabs.List>
				{/if}
				{#if files}
					{#each Object.entries(files) as [file, content] (file)}
						<Tabs.Content value={file}>
							<Code code={content} lang={file.split('.').pop()} />
						</Tabs.Content>
					{/each}
				{/if}
			</Tabs>
		</div>
	{/if}
</div>
