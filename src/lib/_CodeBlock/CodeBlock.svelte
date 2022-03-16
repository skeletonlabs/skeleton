<script lang="ts">
    export let language: string = 'plaintext';
    export let code: string = '';
</script>

{#if language && code}
<pre class="codeblock {$$props.class}"><code class="language-{language}">{code}</code></pre>
{/if}

<style lang="postcss">
    pre { @apply bg-black text-white; }
    code { @apply block p-4; }
</style>
