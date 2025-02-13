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
<!-- TODO: Move away from @apply
<style lang="postcss">
	.codeblock :global {
		.shiki {
			@apply py-6 text-xs rounded-md whitespace-pre-wrap;
			@apply !bg-black; /* set code block bg color */
		}
		.line {
			/**
			* Horizontal padding is added per line instead of the container
			* so that highlights extend fully to the end of the codeblock
			*/
			@apply px-6 inline-block w-full;
		}
		.highlighted {
			@apply !bg-surface-500/25;
		}
		.highlighted > span {
			@apply !bg-transparent;
		}
	}
</style> -->
