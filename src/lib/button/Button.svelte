<script lang="ts">
    export let variant: string = undefined;
    export let background: string = undefined;
    export let color: string = undefined;
    export let ring: string = undefined;
    export let weight: string = undefined;
    export let rounded: string = undefined;

    // Define Base Classes
    let cBase: string = `inline-block text-center ring-inset pointer-cursor hover:brightness-90 transition-all active:scale-95`;

    // Disabled
    if ($$props.disabled) { cBase += ' opacity-20'; }

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
    switch(variant) {
        // Text
        case('text'):         variantHandler(null, 'text-white'); break;
        case('text-primary'): variantHandler(null, 'text-primary-500 fill-primary-500'); break;
        case('text-accent'):  variantHandler(null, 'text-accent-500 fill-primary-500'); break;
        case('text-warning'): variantHandler(null, 'text-warning-500 fill-primary-500'); break;
        // Filled
        case('filled'):         variantHandler('bg-surface-500'); break;
        case('filled-primary'): variantHandler('bg-primary-500', 'text-white'); break;
        case('filled-accent'):  variantHandler('bg-accent-500', 'text-white'); break;
        case('filled-warning'): variantHandler('bg-warning-500', 'text-white'); break;
        // Ring
        case('ring'):         variantHandler(null, 'text-white', 'ring-white'); break;
        case('ring-primary'): variantHandler(null, 'text-primary-500', 'ring-primary-500'); break;
        case('ring-accent'):  variantHandler(null, 'text-accent-500', 'ring-accent-500'); break;
        case('ring-warning'): variantHandler(null, 'text-warning-500', 'ring-warning-500'); break;
        // Ghost
        case('ghost'):         variantHandler('bg-white/10', 'text-white', 'ring-white'); break;
        case('ghost-primary'): variantHandler('bg-primary-500/10', 'text-primary-500', 'ring-primary-500'); break;
        case('ghost-accent'):  variantHandler('bg-accent-500/10', 'text-accent-500', 'ring-accent-500'); break;
        case('ghost-warning'): variantHandler('bg-warning-500/10', 'text-warning-500', 'ring-warning-500'); break;
    }

    // Maintain the current state of styles
    $: classes = [
        cBase,
        background,
        color || 'text-white',
        ring || `ring-transparent`,
        weight || 'ring-1',
        rounded || 'rounded-lg',
        $$props.class
    ].join(' ');
</script>

<div class="comp-button {classes}">
    {#if $$props.href}
        <a
            class="block py-2.5 px-5"
            disabled={$$props.disabled}
            href={$$props.href} 
            target={$$props.target}
            name={$$props.name}
            id={$$props.id}
            data-testid={$$props['data-testid']}
            on:click
            on:mouseover
            on:focus
        ><slot /></a>
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
        ><slot /></button>
    {/if}
</div>

<style lang="postcss">
    button:disabled { @apply cursor-not-allowed !important; }
</style>
