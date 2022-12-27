<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	import { storeHighlightJs } from './stores';
	import { clipboard } from '$lib/actions/Clipboard/clipboard';

	// Props
	/** Sets a language alias for Highlight.js syntax highlighting. */
	export let language = 'plaintext';
	/** Provide the code to render. Be mindful to escape as needed! */
	export let code = '';

	// Props (styles)
	/** Provided classes to set the background color. */
	export let background = 'bg-[#141517]';
	/** Provided classes to set the text size. */
	export let text = 'text-sm';
	/** Provided classes to set the text color. */
	export let color = 'text-white';
	/** Provided classes to set the border radius. */
	export let rounded = 'rounded-container-token';
	/** Provided classes to set the button styles. */
	export let buttonCopy = 'bg-white/5 hover:bg-white/10';

	// Base Classes
	const cBase = 'overflow-hidden shadow';
	const cHeader = 'text-xs uppercase flex justify-between items-center p-2 pl-4';
	const cPre = 'whitespace-pre-wrap break-all p-4 pt-1';

	// Local
	let formatted = false;
	let displayCode: string = code;
	let copyState = false;

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
		/** @event {{}} copy - Fires when the Copy button is pressed.  */
		dispatch('copy', {});
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
	<header class="code-block-header {cHeader} {background} sticky top-0">
		<!-- Language -->
		<span class="code-block-language text-white/60">{languageFormatter(language)}</span>
		<!-- Copy Button -->
		<button class="code-block-btn btn btn-sm {buttonCopy}" on:click={onCopyClick} use:clipboard={code}>
			{!copyState ? 'Copy' : 'Copied ✓'}
		</button>
	</header>
	<!-- Pre/Code -->
	<pre class="code-block-pre {cPre}"><code class="code-block-code language-{language}">{#if formatted}{@html displayCode}{:else}{code.trim()}{/if}</code></pre>
</div>
{/if}
