<script lang="ts">
    export let variant: string = undefined;
    export let background: string = undefined;
    export let color: string = undefined;
    export let ring: string = undefined;
    export let weight: string = undefined;
    export let rounded: string = undefined;

    // Define Base Classes
    let cBase: string = `inline-block text-center ring-inset pointer-cursor hover:brightness-90 transition-all active:scale-95`;

    // Variant Handler
    function variantHandler(vBackground?: any, vColor?: any, vRing?: any, vWeight?: any, vRounded?: any): void {
        if (variant) {
            if (vBackground) { background = background || vBackground; }
            if (vColor) { color = color || vColor; }
            if (vRing) { ring = ring || vRing; }
            if (vWeight) { weight = weight || vWeight; }
            if (vRounded) { rounded = rounded || vRounded; }
        }
    }
    function setVariant(): void {
        switch(variant) {
            // Text
            case('text'):         variantHandler(null, 'text-black dark:text-white'); break;
            case('text-primary'): variantHandler(null, 'text-primary-500 fill-primary-500'); break;
            case('text-accent'):  variantHandler(null, 'text-accent-500 fill-primary-500'); break;
            case('text-warning'): variantHandler(null, 'text-warning-500 fill-primary-500'); break;
            // Filled
            case('filled'):         variantHandler('bg-black dark:bg-white', 'text-white dark:text-black'); break;
            case('filled-primary'): variantHandler('bg-primary-500', 'text-white'); break;
            case('filled-accent'):  variantHandler('bg-accent-500', 'text-white'); break;
            case('filled-warning'): variantHandler('bg-warning-500', 'text-white'); break;
            // Ring
            case('ring'):         variantHandler(null, 'text-black dark:text-white', 'ring-black dark:ring-white'); break;
            case('ring-primary'): variantHandler(null, 'text-primary-500', 'ring-primary-500'); break;
            case('ring-accent'):  variantHandler(null, 'text-accent-500', 'ring-accent-500'); break;
            case('ring-warning'): variantHandler(null, 'text-warning-500', 'ring-warning-500'); break;
            // Ghost
            case('ghost'):         variantHandler('bg-black/10 dark:bg-white/10', 'text-black dark:text-white', 'ring-black dark:ring-white'); break;
            case('ghost-primary'): variantHandler('bg-primary-500/10', 'text-primary-500', 'ring-primary-500'); break;
            case('ghost-accent'):  variantHandler('bg-accent-500/10', 'text-accent-500', 'ring-accent-500'); break;
            case('ghost-warning'): variantHandler('bg-warning-500/10', 'text-warning-500', 'ring-warning-500'); break;
        }
    }

    // Reactive
    $: if (variant) setVariant();
    $: classes = [
        cBase,
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
            class="block py-2.5 px-5"
            href={$$props.href} 
            target={$$props.target}
            name={$$props.name}
            id={$$props.id}
            data-testid={$$props['data-testid']}
            on:click
            on:mouseover
            on:focus
        >
            {#if $$slots.lead}<span class="mr-2"><slot name="lead"></slot></span>{/if}
            <slot />
            {#if $$slots.tail}<span class="ml-2"><slot name="tail"></slot></span>{/if}
        </a>
    {:else}
        <button
            class="py-2.5 px-5"
            disabled={$$props.disabled}
            type={$$props.type}
            name={$$props.name}
            id={$$props.id}
            data-testid={$$props['data-testid']}
            on:click
            on:mouseover
            on:focus
        >
            {#if $$slots.lead}<span class="mr-2"><slot name="lead"></slot></span>{/if}
            <slot />
            {#if $$slots.tail}<span class="ml-2"><slot name="tail"></slot></span>{/if}
        </button>
    {/if}
</div>

<style lang="postcss">
    .disabled { @apply opacity-20 !important; }
    .disabled button { @apply cursor-not-allowed !important; }
</style>
