<script lang="ts">
	import { storeHighlightJs } from './stores';
	import { copyToClipboard } from '$lib/actions/copyToClipboard';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import {fade} from 'svelte/transition';

	export let language: string = 'plaintext';
	export let code: string = '';
	export let background: string = 'bg-neutral-900';

	let rawCode: string = code;
	let copied:Boolean = false;

	// Base Classes
	let cBaseBlock: string = `text-surface-50 p-4 rounded`;
	let cBaseHeader: string = 'flex justify-between text-xs opacity-50 pb-2';

	// Notify the template to use @html injection
	let formatted: boolean = false;

	// Allow shorthand 'js' alias for Javascript
	function languageFormatter(lang: string): string {
		if (lang === 'js') {
			return 'javascript';
		}
		return lang;
	}

	// Trigger syntax highlighting if highlight.js is available
	$: if ($storeHighlightJs !== undefined) {
		code = $storeHighlightJs.highlight(code, { language }).value;
		formatted = true;
	}
	function showCopiedState() {
		copied = true;
		setTimeout(()=>{copied=false}, 2000)
	}
	
	// Reactive Classes
	$: classesBlock = `${cBaseBlock} ${background}`;
</script>


<svelte:options accessors />
{#if language && code}
<div class="codeblock {classesBlock} {$$props.class || ''}" data-testid="codeblock">
<header class={cBaseHeader}>{languageFormatter(language)}
	<button on:click={showCopiedState} use:copyToClipboard={rawCode}>
		{#if copied}
			{#each 'Copied!' as char, i}
				<span in:fade="{{delay: 200 + i * 10, duration: 300}}" class="text-primary-400">{char}</span>
			{/each}
		{/if}
		<SvgIcon name='copy-button'/>
	</button>
</header>
<!-- NOTE: don't allow linting as pre/code tags are particular about whitespace -->
<!-- prettier-ignore-start -->
<pre class="whitespace-pre-wrap break-all text-sm"><code class="language-{language} outline-none" contenteditable spellcheck="false">{#if formatted}{@html code}{:else}{code}{/if}</code></pre>
<!-- prettier-ignore-end -->
</div>
{/if}


