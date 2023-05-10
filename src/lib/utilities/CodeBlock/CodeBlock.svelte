<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Types
	import type { CssClasses } from '$lib';

	import { storeHighlightJs } from './stores';
	import { clipboard } from '$lib/actions/Clipboard/clipboard';

	// Props
	/** Sets a language alias for Highlight.js syntax highlighting. */
	export let language = 'plaintext';
	/** Provide the code snippet to render. Be mindful to escape as needed! */
	export let code = '';

	/** Specify if line numbers should be added to the code block*/
	export let lineNumbers: boolean = false;

	// Props (styles)
	/** Provide classes to set the background color. */
	export let background: CssClasses = 'bg-neutral-900/90';
	/** Provided classes to set the backdrop blur. */
	export let blur: CssClasses = '';
	/** Provide classes to set the text size. */
	export let text: CssClasses = 'text-sm';
	/** Provide classes to set the text color. */
	export let color: CssClasses = 'text-white';
	/** Provide classes to set the border radius. */
	export let rounded: CssClasses = 'rounded-container-token';
	/** Provide classes to set the box shadow. */
	export let shadow: CssClasses = 'shadow';
	/** Provide classes to set the button styles. */
	export let button: CssClasses = 'btn btn-sm variant-soft !text-white';
	/** Provide the button label text. */
	export let buttonLabel = 'Copy';
	/** Provide the button label text when copied. */
	export let buttonCopied = '👍';

	// Base Classes
	const cBase = 'overflow-hidden shadow';
	const cHeader = 'text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4';
	const cPre = 'whitespace-pre-wrap break-all p-4 pt-1';

	// Local
	let formatted = false;
	let displayCode: string = code;
	let copyState = false;

	// Allow shorthand alias, but show full text in UI
	function languageFormatter(lang: string): string {
		if (lang === 'js') return 'javascript';
		if (lang === 'ts') return 'typescript';
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

	$: if (lineNumbers) {
		displayCode = displayCode.replace(/^/gm, () => {
			return '<span class="line"></span>\t';
		});
		formatted = true;
	}

	// Reactive
	$: classesBase = `${cBase} ${background} ${blur} ${text} ${color} ${rounded} ${shadow} ${$$props.class ?? ''}`;
</script>

<!-- prettier-ignore -->
{#if language && code}
<div class="codeblock {classesBase}" data-testid="codeblock">
	<!-- Header -->
	<header class="codeblock-header {cHeader}">
		<!-- Language -->
		<span class="codeblock-language">{languageFormatter(language)}</span>
		<!-- Copy Button -->
		<button class="codeblock-btn {button}" on:click={onCopyClick} use:clipboard={code}>
			{!copyState ? buttonLabel : buttonCopied}
		</button>
	</header>
	<!-- Pre/Code -->
	<pre class="codeblock-pre {cPre}"><code class="codeblock-code language-{language} lineNumbers">{#if formatted}{@html displayCode}{:else}{code.trim()}{/if}</code></pre>
</div>
{/if}
