<script lang="ts">
	import OpenInStackblitz from './open-in-stackblitz.svelte';
	import Code from '@/components/ui/code.svelte';
	import { EyeIcon } from '@lucide/svelte';
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
</script>

<Tabs defaultValue="preview">
	<Tabs.List>
		{#if children}
			<Tabs.Trigger value="preview">
				<EyeIcon class="size-5" />
				<span class="sr-only">Preview</span>
			</Tabs.Trigger>
		{/if}
		{#if files}
			{#each Object.keys(files) as file (file)}
				<Tabs.Trigger value={file}>{file}</Tabs.Trigger>
			{/each}
		{/if}
		{#if framework}
			<OpenInStackblitz class="ml-auto" {framework} {files} />
		{/if}
		<Tabs.Indicator />
	</Tabs.List>
	{#if children}
		<Tabs.Content
			value="preview"
			class="card bg-noise bg-surface-50-950 border-[1px] border-surface-200-800 flex justify-center items-center p-8"
		>
			{@render children()}
		</Tabs.Content>
	{/if}
	{#if files}
		{#each Object.entries(files) as [file, content] (file)}
			<Tabs.Content value={file}>
				<Code code={content} lang={file.split('.').pop()} />
			</Tabs.Content>
		{/each}
	{/if}
</Tabs>
