<script lang="ts">
	import { codeToHtml } from '@/modules/shiki.bundle';
	import { CheckIcon, CopyIcon } from '@lucide/svelte';
	import { transformerNotationHighlight, transformerNotationWordHighlight, transformerNotationDiff } from '@shikijs/transformers';

	interface Props {
		code: Parameters<typeof codeToHtml>[0];
		lang?: Parameters<typeof codeToHtml>[1]['lang'];
	}

	const props: Props = $props();
	const { code, lang = 'txt' } = $derived(props);

	const html = $derived(
		await codeToHtml(code.trim(), {
			lang,
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			mergeSameStyleTokens: true,
			mergeWhitespaces: true,
			defaultColor: 'light-dark()',
			transformers: [transformerNotationHighlight(), transformerNotationWordHighlight(), transformerNotationDiff()],
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
	<header class="absolute select-none top-0 left-0 w-full h-10 px-5 text-xs flex justify-between items-center">
		<span class="opacity-50 font-mono">{lang}</span>
		<button onclick={copyCode} class="flex items-center gap-2 h-full" data-copied={hasCopied}>
			{#if hasCopied}
				<CheckIcon class="size-3" />
				Copied
			{:else}
				<CopyIcon class="size-3" />
				Copy code
			{/if}
		</button>
	</header>
	{@html html}
</div>

<style>
	@reference "../../app.css";

	:global(.shiki) {
		font-size: 13px;
		line-height: var(--text-sm--line-height);
		white-space: pre-wrap;
		padding-block: --spacing(5);
		padding-top: --spacing(10);
		border: 1px solid var(--color-surface-100-900);
		border-radius: var(--radius-container);

		@variant dark {
			background-color: rgba(0, 0, 0, 0.5) !important;
		}

		:global(& > code) {
			display: inline-block;
			width: 100%;

			:global(& > .line) {
				display: inline-block;
				width: 100%;
				padding-inline: --spacing(5);
				word-break: break-all;

				:global(&.diff) {
					:global(&.add) {
						position: relative;
						background: var(--color-green-50);
						&::before {
							position: absolute;
							left: --spacing(1.5);
							content: '+';
							color: var(--color-green-500);
						}

						@variant dark {
							background: var(--color-green-950);
						}
					}

					:global(&.remove) {
						position: relative;
						background: var(--color-red-50);
						&::before {
							position: absolute;
							left: --spacing(1.5);
							content: '-';
							color: var(--color-red-500);
						}

						@variant dark {
							background: var(--color-red-950);
						}
					}
				}

				:global(&.highlighted),
				:global(& > .highlighted-word) {
					background-color: var(--color-surface-200-800);
				}
			}
		}
	}
</style>
