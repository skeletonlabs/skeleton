<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export interface Props extends HTMLAttributes<HTMLPreElement> {
		filename?: string;
		highlights?: number[];
		language?: string;
		[key: string]: unknown;
	}
</script>

<script lang="ts">
	import CopyIcon from '@lucide/svelte/icons/copy';
	import ThumbsUpIcon from '@lucide/svelte/icons/thumbs-up';

	const { children, filename, highlights, language, ...rest }: Props = $props();

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
		<header class="pb-2 flex justify-between items-center">
			<span class="text-xs opacity-50">{filename ?? language}</span>
			<button class="btn-icon btn-icon-sm preset-outlined-surface-200-800 hover:preset-tonal" onclick={copyCode}>
				{#if copied}
					<ThumbsUpIcon />
				{:else}
					<CopyIcon />
				{/if}
			</button>
		</header>
	{/if}
	<pre bind:this={preRef} {...rest} style="white-space: pre-wrap;">{@render children?.()}</pre>
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
