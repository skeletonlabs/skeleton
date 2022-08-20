<script lang="ts">
	import Prism from 'prismjs';
	import loadLanguages from 'prismjs/components/';

	export let language: string = 'plaintext';
	export let code: string = '';
	export let background: string = 'bg-neutral-900';

	// Base Classes
	let cBaseBlock: string = `text-surface-50 p-4 rounded`;
	let cBaseHeader: string = 'text-xs opacity-50 pb-2';

	if (language !== 'plaintext') loadLanguages([language]);

	// Reactive Classes
	$: classesBlock = `${cBaseBlock} ${background}`;
</script>

<div class="codeblock {classesBlock} {$$props.class}" data-testid="codeblock">
	<header class={cBaseHeader}>{language}</header>
	<!-- prettier-ignore -->
	<pre class="whitespace-pre-wrap break-all text-sm"><code class="language-{language} outline-none" contenteditable={$$props.contenteditable} spellcheck="false">{@html Prism.highlight(code, Prism.languages[language], language) || code}</code></pre>
</div>
