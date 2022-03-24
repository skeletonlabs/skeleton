<script lang="ts">
    export let language: string = 'plaintext';
    export let code: string = '';
</script>

{#if language && code}
<pre data-testid='codeblock' class="codeblock {$$props.class}"><code class="language-{language}">{code}</code></pre>
{/if}

<style lang="postcss">
    pre { @apply bg-[#0d1117] text-[#c9d1d9]; }
    code { @apply block p-4; }
</style>
