<script lang="ts">
    import hljs from 'highlight.js';
    import { afterUpdate } from 'svelte';
    
    export let language: string = 'plaintext';
    export let code: string = '';

    let highlighted;
    let cBase: string = `bg-surface-700 dark:bg-black/20 text-surface-50 p-4 rounded`;

    function languageFormatter(lang: string): string {
        if (lang === 'js') { return 'javascript'; }
        return lang;
    }

	afterUpdate(() => {
        highlighted = hljs.highlight(code, { language }).value;
    });
</script>

{#if language && code}
<div class="codeblock {cBase} {$$props.class}" data-testid="codeblock">
<header class="text-xs opacity-50 pb-2">{languageFormatter(language)}</header>
<pre class="whitespace-pre-wrap text-base overflow-x-auto"><code class="language-{language}">{@html highlighted ? highlighted : '&nbsp;'}</code></pre>
</div>
{/if}
