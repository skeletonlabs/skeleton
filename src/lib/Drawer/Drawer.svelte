<script lang="ts">
    import type { Writable } from 'svelte/store';

    // Props
    export let visible: Writable<boolean> = undefined;
    export let fixed: string = undefined;
    export let border: string = 'border-r border-surface-200 dark:border-surface-800';

    // Base Classes
    const cBaseDrawer: string = 'flex flex-col w-[280px] h-screen bg-surface-50 dark:bg-surface-900';
    const cBaseShim: string = 'lg:hidden fixed top-0 left-0 right-0 bottom-0 z-30 bg-white/50 dark:bg-black/50';
    
    // Set Fixed Position
    let cFixed: string;
    let cPosition: string;
    if (fixed !== undefined) {
        cFixed = 'flex-none fixed lg:static top-0 z-40 shadow-2xl lg:shadow-none lg:translate-x-0 transition-transform';
        switch(fixed) {
            case('left'): cPosition = 'left-0 -translate-x-full'; break;
            case('right'): cPosition = 'right-0 translate-x-full'; break;
        }
    }

    // Close Handler
	const onClose = () => { visible.set(false); }

    // Reactive Classes
    $: classesDrawer = `${cBaseDrawer} ${cFixed} ${cPosition} ${border} ${$$props.class}`;
</script>

<div class="drawer {classesDrawer}" class:translate-x-0={$visible} data-testid="drawer">

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
    <div class="{cBaseShim}" on:click={onClose}></div>
{/if}