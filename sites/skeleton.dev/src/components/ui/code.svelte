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
		await codeToHtml(code, {
			lang,
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
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
	{@html html}
	<button onclick={copyCode} class="btn absolute p-2 aspect-square preset-tonal top-3 end-3">
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
		font-size: 12px;
		line-height: var(--text-sm--line-height);
		white-space: pre-wrap;
		padding-block: --spacing(5);
		border: 1px solid var(--color-surface-100-900);
		border-radius: var(--radius-container);
		margin-bottom: --spacing(2);

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

				:global(&:empty) {
					display: none;
				}

				:global(&.diff) {
					:global(&.add) {
						position: relative;
						&::before {
							position: absolute;
							left: --spacing(2);
							content: '+ ';
							color: var(--color-success-500);
						}
					}

					:global(&.remove) {
						position: relative;
						&::before {
							position: absolute;
							left: --spacing(2);
							content: '- ';
							color: var(--color-error-500);
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
