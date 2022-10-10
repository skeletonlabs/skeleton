<!-- <svelte:options accessors /> -->
<script lang="ts">
	import { storeHighlightJs } from './stores';
	import { clipboard } from '$lib/actions/Clipboard/clipboard';

	// Props
	export let language: string = 'plaintext';
	export let code: string = '';
	// Props (design)
	export let background: string = 'bg-[#141517]';
	export let text: string = 'text-sm';
	export let color: string = 'text-white';
	export let rounded: string = 'rounded-theme-container';
	export let buttonCopy: string = 'btn btn-sm bg-white/5 hover:bg-white/10';

	// Base Classes
	const cBase: string = 'overflow-hidden shadow';
	const cHeader: string = 'text-xs uppercase flex justify-between items-center p-2 pl-4';
	const cPre: string = 'whitespace-pre-wrap break-all p-4 pt-1';

	// Local
	let formatted: boolean = false;
	let displayCode: string = code;
	let copyState: Boolean = false;

	// Allow shorthand 'js' alias for Javascript
	function languageFormatter(lang: string): string {
		if (lang === 'js') return 'javascript';
		return lang;
	}

	// Handle Copy Text
	function onCopyClick() {
		copyState = true;
		// prettier-ignore
		setTimeout(() => { copyState = false; }, 2000);
	}

	// Trigger syntax highlighting if highlight.js is available
	$: if ($storeHighlightJs !== undefined) {
		displayCode = $storeHighlightJs.highlight(code, { language }).value.trim();
		formatted = true;
	}

	// Reactive
	$: classesBase = `${cBase} ${background} ${text} ${color} ${rounded} ${$$props.class ?? ''}`;
</script>

<!-- prettier-ignore -->
{#if language && code}
<div class="code-block {classesBase}" data-testid="code-block">
	<!-- Header -->
	<header class="cb-header {cHeader} {background} sticky top-0">
		<!-- Language -->
		<span class="text-white/60">{languageFormatter(language)}</span>
		<!-- Copy Button -->
		<button on:click={onCopyClick} use:clipboard={code} class="cb-copy-btn {buttonCopy}">
			{!copyState ? 'Copy' : 'Copied ✓'}
		</button>
	</header>
	<!-- Pre/Code -->
	<pre class={cPre}><code class="cb-preformatted language-{language}">{#if formatted}{@html displayCode}{:else}{code.trim()}{/if}</code></pre>
</div>
{/if}
