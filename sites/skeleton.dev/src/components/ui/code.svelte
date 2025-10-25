<script lang="ts">
	import { codeToHtml } from '@/modules/shiki.bundle';
	import { CheckIcon, CopyIcon } from '@lucide/svelte';

	interface Props {
		code: Parameters<typeof codeToHtml>[0];
		lang?: Parameters<typeof codeToHtml>[1]['lang'];
	}

	const props: Props = $props();
	const { code, lang = 'txt' } = $derived(props);

	const html = $derived(
		await codeToHtml(code, {
			lang,
			themes: {
				light: 'light-plus',
				dark: 'dark-plus',
			},
			defaultColor: 'light-dark()',
		}),
	);

	let hasCopied = $state(false);

	async function copyCode() {
		if (hasCopied) {
			return;
		}
		await navigator.clipboard.writeText(code);
		hasCopied = true;
		setTimeout(() => {
			hasCopied = false;
		}, 2000);
	}
</script>

<div class="relative" data-pagefind-ignore>
	{@html html}
	<button onclick={copyCode} class="btn p-2 aspect-square preset-tonal absolute top-3 end-3">
		{#if hasCopied}
			<CheckIcon class="size-4" />
		{:else}
			<CopyIcon class="size-4" />
		{/if}
	</button>
</div>

<style>
	@reference "../../app.css";

	:global(.shiki) {
		font-size: var(--text-sm);
		line-height: var(--text-sm--line-height);
		white-space: pre-wrap;
		padding: --spacing(4);
		border-radius: var(--radius-container);
		border: 1px solid var(--color-surface-200);
		@variant dark {
			border-color: var(--color-surface-800);
		}
	}
</style>
