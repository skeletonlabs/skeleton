<script lang="ts">
    import type { Writable } from 'svelte/store';

    export let visible: Writable<boolean> = undefined;
    export let fixed: boolean = false;

    // Base Classes
    let cBase: string = 'flex flex-col w-[320px] h-screen bg-surface-50 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-800';

    // Set Fixed (for responsive/animated)
    if (fixed) {
        cBase += ' flex-none fixed lg:static top-0 left-0 z-40 shadow-2xl lg:shadow-none -translate-x-full lg:translate-x-0 transition-transform';
    }
    
    // Drawer Actions
	const drawerClose = () => { visible.set(false); }

    $: classes = `${cBase} ${$$props.class}`;
</script>

<div class="drawer {classes}" class:translate-x-0={$visible}>

    <!-- Header -->
    {#if $$slots.header}
    <header class="flex-none"><slot name="header"></slot></header>
    {/if}

    <!-- Main -->
    {#if $$slots.main}
    <section class="flex-auto overflow-y-auto"><slot name="main"></slot></section>
    {/if}

    <!-- Footer -->
    {#if $$slots.footer}
    <footer class="flex-none"><slot name="footer"></slot></footer>
    {/if}

</div>

<!-- Shim -->
{#if $visible}
    <div class="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-30 bg-white/50 dark:bg-black/50" on:click={drawerClose}></div>
{/if}