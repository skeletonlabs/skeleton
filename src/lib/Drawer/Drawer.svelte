<script lang="ts">
    import { fade } from 'svelte/transition';
    import type { Writable } from 'svelte/store';

    // Props
    export let visible: Writable<boolean> = undefined;
    export let fixed: string = undefined;
    export let backdrop: string = 'bg-white/50 dark:bg-black/50';
    export let background: string = 'bg-surface-50 dark:bg-surface-900';
    export let border: string = 'border-r border-surface-200 dark:border-surface-800';

    // Base Classes
    const cBaseBackdrop: string = 'lg:hidden fixed top-0 left-0 right-0 bottom-0 z-30';
    const cBaseDrawer: string = 'flex flex-col w-[280px] h-screen';
    
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

    // Handle Backdrop Click
	const onBackdropClick = () => { visible.set(false); }

    // Reactive Classes
    $: classesDrawer = `${cBaseDrawer} ${background} ${cFixed} ${cPosition} ${border}`;
    $: classesBackdrop = `${cBaseBackdrop} ${backdrop}`;
</script>

<div class="drawer {classesDrawer} {$$props.class}" class:translate-x-0={$visible} data-testid="drawer">

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

<!-- Backdrop -->
{#if $visible}
<div class="drawer-backdrop {classesBackdrop}" on:click={onBackdropClick} transition:fade|local={{duration: 250}}></div>
{/if}