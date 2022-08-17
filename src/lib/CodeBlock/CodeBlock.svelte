<script lang="ts">
	import hljs from 'highlight.js';

	export let language: string = 'plaintext';
	export let code: string = '';
	export let background: string = 'bg-neutral-900';

	// Base Classes
	let cBaseBlock: string = `text-surface-50 p-4 rounded`;
	let cBaseHeader: string = 'text-xs opacity-50 pb-2';

	function languageFormatter(lang: string): string {
		if (lang === 'js') {
			return 'javascript';
		}
		return lang;
	}

	// Reactive Classes
	$: classesBlock = `${cBaseBlock} ${background}`;
</script>

{#if language && code}
	<div class="codeblock {classesBlock} {$$props.class}" data-testid="codeblock">
		<header class={cBaseHeader}>{languageFormatter(language)}</header>
		<!-- prettier-ignore -->
		<pre class="whitespace-pre-wrap break-all text-sm">
<code class="language-{language} outline-none" contenteditable spellcheck="false">
{@html hljs.highlight(code, { language }).value || code}
</code>
</pre>
	</div>
{/if}
