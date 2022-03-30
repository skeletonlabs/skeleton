<script lang="ts">
    export let background: string = 'bg-surface-200 dark:bg-surface-800';
    export let color: string = undefined;

    // Base Classes
    let cBase: string = `rounded-lg`;

    // Reactive
    $: classes = `${cBase} ${background} ${color}`;
</script>

<div class="card {classes} {$$props.class}">
    <!-- Header -->
    {#if $$slots.header}
    <header><slot name="header"></slot></header>
    {/if}
    <!-- Body -->
    <div class="p-4"><slot /></div>
    <!-- Footer -->
    {#if $$slots.footer}
    <footer><slot name="footer"></slot></footer>
    {/if}
</div>
