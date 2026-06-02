<script lang="ts">
	import CopyIcon from '@lucide/svelte/icons/copy';
	import ThumbsUpIcon from '@lucide/svelte/icons/thumbs-up';
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className,
		filename,
		highlights,
		language,
		...rest
	}: {
		children?: Snippet;
		class?: string;
		filename?: string;
		highlights?: number[];
		language?: string;
		[key: string]: unknown;
	} = $props();

	let preRef: HTMLPreElement | undefined = $state();
	let copied = $state(false);

	$effect(() => {
		if (!copied) return;
		const timeout = setTimeout(() => (copied = false), 2000);
		return () => clearTimeout(timeout);
	});

	async function copyCode() {
		const code = preRef?.textContent;
		if (!code) return;
		await navigator.clipboard.writeText(code);
		copied = true;
	}
</script>

<div class="prose-pre shadow-lg">
	{#if filename || language}
		<header class="rounded-tl-container rounded-tr-container bg-white dark:bg-neutral-950 pt-4 px-4 flex justify-between items-center">
			<span class="text-xs opacity-50">{filename ?? language}</span>
			<button class="btn-icon btn-icon-sm opacity-50 hover:opacity-100 hover:preset-tonal" onclick={copyCode}>
				{#if copied}
					<ThumbsUpIcon />
				{:else}
					<CopyIcon />
				{/if}
			</button>
		</header>
	{/if}
	<pre bind:this={preRef} class="rounded-tl-none! rounded-tr-none! {className}" {...rest}>{@render children?.()}</pre>
</div>

<style>
	/* Highlight line */
	:global(.prose-pre .shiki .line.highlight) {
		background-color: var(--color-surface-100-900);
		width: calc(100% + 2rem);
		margin-left: -1rem;
		padding-left: 1rem;
	}
</style>
