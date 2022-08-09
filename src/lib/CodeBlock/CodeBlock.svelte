<script lang="ts">
    import hljs from 'highlight.js';
	import Button from '$lib/Button/Button.svelte';

    export let language: string = 'plaintext';
    export let code: string = '';
	export let variant:string = 'ghost';

	let hideCopyButton: boolean = true;
	let toggleCopyButtonVisibility = () => { hideCopyButton = !hideCopyButton}
	let computedVariant:string = variant
	let showCopiedMessage:boolean = false;

    // Base Classes
    let cBaseBlock: string = `bg-surface-700 dark:bg-black/20 text-surface-50 p-4 rounded`;
    let cBaseHeader: string = 'flex justify-between text-xs opacity-50 pb-2 h-8';

    function languageFormatter(lang: string): string {
        if (lang === 'js') { return 'javascript'; }
        return lang;
    }

	// Set the copy code button back to normal
	let timeoutAutoRevert: any;

	function copyCode(){
		if (navigator.clipboard) {
			navigator.clipboard.writeText(code);
			computedVariant = variant + '-primary';
			showCopiedMessage = true;
			clearTimeout(timeoutAutoRevert);
			timeoutAutoRevert = setTimeout(revertCopyCodeButton, 3000);
		}
	}

	function revertCopyCodeButton(){
		computedVariant = variant;
		showCopiedMessage = false;
	}
</script>

{#if language && code}
<div class="codeblock {cBaseBlock} {$$props.class}" data-testid="codeblock" on:mouseenter="{toggleCopyButtonVisibility}" on:mouseleave="{toggleCopyButtonVisibility}">
<header class="{cBaseHeader}">
	{languageFormatter(language)} 
	<Button variant={computedVariant} size="sm" bind:hidden={hideCopyButton} on:click={copyCode}>
		{#if showCopiedMessage} Copied! {:else} Copy {/if}
	</Button>
</header>
<pre class="whitespace-pre-wrap text-base overflow-x-auto">
<code class="language-{language} outline-none" contenteditable spellcheck="false">{@html hljs.highlight(code, { language }).value || code}</code>
</pre>
</div>
{/if}
