<!-- Source: https://github.com/skeletonlabs/floating-ui-svelte/tree/main/src/docs/components/CodeBlock -->

<script lang="ts">
	import MoonlightDark from './moonlight-dark.json';
	import { page } from '$app/stores';
	import type { BuiltinLanguage, SpecialLanguage } from 'shiki';

	interface Props {
		code: string;
		lang: BuiltinLanguage | SpecialLanguage;
		mark?: Array<number | [number, number]>;
	}

	// Props
	let { code, lang = 'text', mark = [] }: Props = $props();

	const highlightedLineNumbers = $derived(
		mark
			.map((mark) => {
				if (Array.isArray(mark)) {
					const [start, end] = mark;
					return Array.from({ length: end - start + 1 }, (_, i) => start + i);
				}
				return mark;
			})
			.flat()
	);

	// Process Language
	const renderedCode = $derived(
		// FIXME: https://github.com/sveltejs/eslint-plugin-svelte/issues/652
		$page.data.highlighter.codeToHtml(code.trim(), {
			lang,
			themes: {
				dark: MoonlightDark,
				light: MoonlightDark
			},
			transformers: [
				/**
				 * This transformer adds the `highlighted` class to lines that are to be highlighted.
				 */
				{
					// @ts-expect-error type
					line(node, lineNumber) {
						if (!highlightedLineNumbers.includes(lineNumber)) {
							return;
						}
						// @ts-expect-error type
						this.addClassToHast(node, 'highlighted');
					}
				}
			]
		})
	);

	// Sets the language badge color
	function setLangCss() {
		let color = 'bg-surface-500 text-white';
		if (lang === 'css') color = 'bg-blue-700 text-white';
		if (['ts', 'js'].includes(lang)) color = 'bg-yellow-400 text-black';
		return color;
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<figure class="relative rounded-md overflow-hidden">
	<!-- Language -->
	<span class="absolute top-0 right-0 text-[10px] leading-none font-bold px-1 py-0.5 rounded-bl shadow {setLangCss()}">
		{lang}
	</span>
	<!-- Rendered Code -->
	<div class="codeblock">{@html renderedCode}</div>
</figure>

<!-- eslint-enable svelte/no-at-html-tags -->
<style lang="postcss">
	.codeblock :global {
		background-color: var(--color-surface-950);
		border: 1px solid var(--color-surface-100-900);
		border-radius: var(--radius-container);
		padding-block: calc(var(--spacing) * 6);
		.shiki {
			font-size: var(--text-xs);
			line-height: var(--text-xs--line-height);
			white-space: pre-wrap;
		}
		.line {
			/**
			* Horizontal padding is added per line instead of the container
			* so that highlights extend fully to the end of the codeblock
			*/
			display: inline-block;
			padding-inline: calc(var(--spacing) * 4);
			width: 100%;
		}
		.highlighted {
			background-color: color-mix(in oklab, var(--color-surface-500) 25%, transparent) !important;
		}
		.highlighted > span {
			background-color: transparent !important;
		}
	}
</style>
