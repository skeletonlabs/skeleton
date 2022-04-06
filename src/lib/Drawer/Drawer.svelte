<script lang="ts">
    import type { Writable } from 'svelte/store';

    export let visible: Writable<boolean> = undefined;
    export let fixed: boolean = false;
    export let position: string = 'left'; // left|right
    export let border: string = 'border-r border-surface-200 dark:border-surface-800';

    // Base Classes
    let cBase: string = 'flex flex-col w-[320px] h-screen bg-surface-50 dark:bg-surface-900';
    let cFixed: string = '';

    // Set Fixed and set left/right position
    if (fixed) {
        cFixed = 'flex-none fixed lg:static top-0 z-40 shadow-2xl lg:shadow-none lg:translate-x-0 transition-transform';
        switch(position) {
            case('left'): cFixed += ' left-0 -translate-x-full'; break;
            // FIXME: class conflicts with inline class binding for visible
            // case('right'): cFixed += ' right-0 translate-x-full'; break;
        }
    }

    // Drawer Actions
	const close = () => { visible.set(false); }

    $: classes = `${cBase} ${cFixed} ${border} ${$$props.class}`;
</script>

<div class="drawer {classes}" class:translate-x-0={$visible} data-testid="drawer">

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
    <div class="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-30 bg-white/50 dark:bg-black/50" on:click={close}></div>
{/if}