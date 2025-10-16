<script lang="ts">
	import Code from './code.svelte';
	import OpenInStackblitz from './open-in-stackblitz.svelte';
	import { getExtensionFromFramework } from '@/modules/get-extension-from-framework';
	import { getLangFromExtension } from '@/modules/get-lang-from-extension';
	import { EyeIcon } from '@lucide/svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import type { CollectionEntry } from 'astro:content';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		framework: CollectionEntry<'frameworks'>['id'];
		code: string;
		files?: Record<string, string>;
	}

	const props: Props = $props();
	const { children, framework, code, files } = $derived(props);

	const frameworkExtension = $derived(getExtensionFromFramework(framework));
</script>

<Tabs defaultValue="preview">
	<Tabs.List>
		<Tabs.Trigger value="preview">
			<EyeIcon class="size-5" />
			<span class="sr-only">Preview</span>
		</Tabs.Trigger>
		<Tabs.Trigger value="app.{frameworkExtension}">app.{frameworkExtension}</Tabs.Trigger>
		{#if files}
			{#each Object.keys(files) as file (file)}
				<Tabs.Trigger value={file}>{file}</Tabs.Trigger>
			{/each}
		{/if}
		<OpenInStackblitz class="ml-auto" {framework} {code} {files} />
		<Tabs.Indicator />
	</Tabs.List>
	<Tabs.Content value="preview">
		{@render children()}
	</Tabs.Content>
	<Tabs.Content value="app.{frameworkExtension}">
		<Code {code} lang={getLangFromExtension(frameworkExtension)} />
	</Tabs.Content>
	{#if files}
		{#each Object.entries(files) as [file, content] (file)}
			<Tabs.Content value={file}>
				<Code code={content} lang={getLangFromExtension(file.split('.').pop())} />
			</Tabs.Content>
		{/each}
	{/if}
</Tabs>
