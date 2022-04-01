<script lang="ts">
    export let background: string = 'bg-surface-200 dark:bg-surface-800';
    export let color: string = undefined;

    // Base Classes
    let cBase: string = `p-4 rounded-lg overflow-hidden`;

    // Reactive
    $: classes = `${cBase} ${background} ${color}`;
</script>

<div class="card {classes} {$$props.class}">
    <!-- Header -->
    {#if $$slots.header}
    <header class="mb-4"><slot name="header"></slot></header>
    {/if}
    <!-- Body -->
    <slot />
    <!-- Footer -->
    {#if $$slots.footer}
    <footer class="mt-4"><slot name="footer"></slot></footer>
    {/if}
</div>
