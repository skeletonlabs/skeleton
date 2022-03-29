<script lang="ts">
    import { getContext, tick } from "svelte";

    export let variant: string = undefined;
    export let size: string = undefined;
    export let background: string = getContext('background') || undefined;
    export let color: string = getContext('color') || undefined;
    export let ring: string = undefined;
    export let weight: string = undefined;
    export let rounded: string = getContext('rounded') || undefined;

    // Base Classes
    let cBase: string = `inline-block text-center ring-inset pointer-cursor hover:brightness-90 transition-all active:scale-95`;

    // Set Size
    function setSize(size: string): string {
        switch(size) {
            case('none'): return 'text-base';
            case('sm'): return 'text-sm px-3 py-2';
            case('lg'): return 'text-lg px-6 py-3';
            case('xl'): return 'text-xl px-7 py-3.5';
            default: return 'text-base px-5 py-2.5'; // base
        }
    }

    // Depending on varient key passed, sset preset prop options.
    async function selectVariant(): Promise<void> {
        switch(variant) {
            // Minimal
            case('minimal'):      setProps('none'); break;
            // Text
            case('text'):         setProps(null, null, 'text-black dark:text-white'); break;
            case('text-primary'): setProps(null, null, 'text-primary-500 fill-primary-500'); break;
            case('text-accent'):  setProps(null, null, 'text-accent-500 fill-primary-500'); break;
            case('text-warning'): setProps(null, null, 'text-warning-500 fill-primary-500'); break;
            // Filled
            case('filled'):         setProps(null, 'bg-black dark:bg-white', 'text-white dark:text-black'); break;
            case('filled-primary'): setProps(null, 'bg-primary-500', 'text-white'); break;
            case('filled-accent'):  setProps(null, 'bg-accent-500', 'text-white'); break;
            case('filled-warning'): setProps(null, 'bg-warning-500', 'text-white'); break;
            // Ring
            case('ring'):         setProps(null, null, 'text-black dark:text-white', 'ring-black dark:ring-white'); break;
            case('ring-primary'): setProps(null, null, 'text-primary-500', 'ring-primary-500'); break;
            case('ring-accent'):  setProps(null, null, 'text-accent-500', 'ring-accent-500'); break;
            case('ring-warning'): setProps(null, null, 'text-warning-500', 'ring-warning-500'); break;
            // Ghost
            case('ghost'):         setProps(null, 'bg-black/10 dark:bg-white/10', 'text-black dark:text-white', 'ring-black dark:ring-white'); break;
            case('ghost-primary'): setProps(null, 'bg-primary-500/10', 'text-primary-500', 'ring-primary-500'); break;
            case('ghost-accent'):  setProps(null, 'bg-accent-500/10', 'text-accent-500', 'ring-accent-500'); break;
            case('ghost-warning'): setProps(null, 'bg-warning-500/10', 'text-warning-500', 'ring-warning-500'); break;
        }
        // Tick
        await tick();
    }

    // Set props based on provided values
    function setProps(vSize: string, vBackground?: string, vColor?: string, vRing?: string, vWeight?: string, vRounded?: string): void {
        if (variant) {
            if (vSize) size = vSize;
            if (vBackground) background = vBackground;
            if (vColor) color = vColor;
            if (vRing) ring = vRing;
            if (vWeight) weight = vWeight;
            if (vRounded) rounded = vRounded;
        }
    }

    // Reactive
    $: if (variant) selectVariant();
    $: classes = [
        cBase,
        background || getContext('background'),
        color || getContext('color') || 'text-black dark:text-white',
        ring || `ring-transparent`,
        weight || 'ring-1',
        rounded || 'rounded-lg',
        $$props.class
    ].join(' ');
</script>

<div class="comp-button {classes}" class:disabled={$$props.disabled}>
    {#if $$props.href}
        <a
            class="flex justify-center items-center space-x-3 {setSize(size)}"
            href={$$props.href} 
            target={$$props.target}
            name={$$props.name}
            id={$$props.id}
            data-testid={$$props['data-testid']}
            on:click
            on:mouseover
            on:focus
        >
            {#if $$slots.lead}<slot name="lead"></slot>{/if}
            <slot />
            {#if $$slots.tail}<slot name="tail"></slot>{/if}
        </a>
    {:else}
        <button
            class="flex-inline justify-center items-center space-x-3 {setSize(size)}"
            disabled={$$props.disabled}
            type={$$props.type}
            name={$$props.name}
            id={$$props.id}
            data-testid={$$props['data-testid']}
            on:click
            on:mouseover
            on:focus
        >
            {#if $$slots.lead}<slot name="lead"></slot>{/if}
            <slot />
            {#if $$slots.tail}<slot name="tail"></slot>{/if}
        </button>
    {/if}
</div>

<style lang="postcss">
    .disabled { @apply opacity-30 !important; }
    .disabled button { @apply cursor-not-allowed !important; }
</style>
