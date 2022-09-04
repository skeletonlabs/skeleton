<script lang="ts">
	import { storeHighlightJs } from '$lib/CodeBlock/stores';

	export let language: string = 'plaintext';
	export let code: string = '';
	export let background: string = 'bg-neutral-900';

	// Base Classes
	let cBaseBlock: string = `text-surface-50 p-4 rounded`;
	let cBaseHeader: string = 'text-xs opacity-50 pb-2';

	// Allow shorthand 'js' alias for Javascript
	function languageFormatter(lang: string): string {
		if (lang === 'js') {
			return 'javascript';
		}
		return lang;
	}

	// Trigger syntax highlighting if highlight.js is available
	$: if ($storeHighlightJs !== undefined) {
		// Apply Highlight.js syntaxt highlighting
		code = $storeHighlightJs.highlight(code, { language }).value;
	}

	// Reactive Classes
	$: classesBlock = `${cBaseBlock} ${background}`;
</script>

<!-- NOTE: don't allow linting on this page as pre/code tags are particular about whitespace -->
<!-- prettier-ignore-start -->

{#if language && code}
<div class="codeblock {classesBlock} {$$props.class}" data-testid="codeblock">
<header class={cBaseHeader}>{languageFormatter(language)}</header>
<pre class="whitespace-pre-wrap break-all text-sm"><code class="language-{language} outline-none" contenteditable spellcheck="false">{#if $storeHighlightJs !== undefined}{@html code}{:else}{code}{/if}</code></pre>
</div>
{/if}

<!-- prettier-ignore-end -->
