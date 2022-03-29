<script lang="ts">
    export let variant: string = undefined;
    export let size: string = undefined;
    export let background: string = undefined;
    export let color: string = undefined;
    export let ring: string = undefined;
    export let weight: string = undefined;
    export let rounded: string = undefined;

    // Define Base Classes
    let cBase: string = `inline-block text-center ring-inset pointer-cursor hover:brightness-90 transition-all active:scale-95`;

    // Variant Handler
    function variantHandler(vSize: string, vBackground?: string, vColor?: string, vRing?: string, vWeight?: string, vRounded?: string): void {
        if (variant) {
            if (vSize) { size = size || vSize; }
            if (vBackground) { background = background || vBackground; }
            if (vColor) { color = color || vColor; }
            if (vRing) { ring = ring || vRing; }
            if (vWeight) { weight = weight || vWeight; }
            if (vRounded) { rounded = rounded || vRounded; }
        }
    }
    function setVariant(): void {
        switch(variant) {
            // Minimal
            case('minimal'):      variantHandler('none'); break;
            // Text
            case('text'):         variantHandler(null, null, 'text-black dark:text-white'); break;
            case('text-primary'): variantHandler(null, null, 'text-primary-500 fill-primary-500'); break;
            case('text-accent'):  variantHandler(null, null, 'text-accent-500 fill-primary-500'); break;
            case('text-warning'): variantHandler(null, null, 'text-warning-500 fill-primary-500'); break;
            // Filled
            case('filled'):         variantHandler(null, 'bg-black dark:bg-white', 'text-white dark:text-black'); break;
            case('filled-primary'): variantHandler(null, 'bg-primary-500', 'text-white'); break;
            case('filled-accent'):  variantHandler(null, 'bg-accent-500', 'text-white'); break;
            case('filled-warning'): variantHandler(null, 'bg-warning-500', 'text-white'); break;
            // Ring
            case('ring'):         variantHandler(null, null, 'text-black dark:text-white', 'ring-black dark:ring-white'); break;
            case('ring-primary'): variantHandler(null, null, 'text-primary-500', 'ring-primary-500'); break;
            case('ring-accent'):  variantHandler(null, null, 'text-accent-500', 'ring-accent-500'); break;
            case('ring-warning'): variantHandler(null, null, 'text-warning-500', 'ring-warning-500'); break;
            // Ghost
            case('ghost'):         variantHandler(null, 'bg-black/10 dark:bg-white/10', 'text-black dark:text-white', 'ring-black dark:ring-white'); break;
            case('ghost-primary'): variantHandler(null, 'bg-primary-500/10', 'text-primary-500', 'ring-primary-500'); break;
            case('ghost-accent'):  variantHandler(null, 'bg-accent-500/10', 'text-accent-500', 'ring-accent-500'); break;
            case('ghost-warning'): variantHandler(null, 'bg-warning-500/10', 'text-warning-500', 'ring-warning-500'); break;
        }
    }

    // Size
    function setSize(size: string): string {
        switch(size) {
            case('none'): return 'text-base';
            case('sm'): return 'text-sm px-3 py-2';
            case('lg'): return 'text-lg px-6 py-3';
            case('xl'): return 'text-xl px-7 py-3.5';
            default: return 'text-base px-5 py-2.5'; // base
        }
        return size;
    }

    // Reactive
    $: if (variant) setVariant();
    $: classes = [
        cBase,
        setSize(size),
        background,
        color || 'text-black dark:text-white',
        ring || `ring-transparent`,
        weight || 'ring-1',
        rounded || 'rounded-lg',
        $$props.class
    ].join(' ');
</script>

<div class="comp-button {classes}" class:disabled={$$props.disabled}>
    {#if $$props.href}
        <a
            class="flex space-x-3"
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
            class="flex space-x-3"
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
