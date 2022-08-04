<script lang="ts">
    import hljs from 'highlight.js';
    
    export let language: string = 'plaintext';
    export let code: string = '';

    // Base Classes
    let cBaseBlock: string = `bg-surface-700 dark:bg-black/20 text-surface-50 p-4 rounded`;
    let cBaseHeader: string = 'text-xs opacity-50 pb-2';

    function languageFormatter(lang: string): string {
        if (lang === 'js') { return 'javascript'; }
        return lang;
    }
</script>

{#if language && code}
<div class="codeblock {cBaseBlock} {$$props.class}" data-testid="codeblock">
<header class="{cBaseHeader}">{languageFormatter(language)}</header>
<pre class="whitespace-pre-wrap text-base overflow-x-auto">
<code class="language-{language} outline-none" contenteditable spellcheck="false">{@html hljs.highlight(code, { language }).value || code}</code>
</pre>
</div>
{/if}
