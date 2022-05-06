<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props: Variant
    export let variant: string = undefined;
    // Props: Misc
    export let size: string = 'base';
    export let background: string = 'bg-black dark:bg-white';
    export let color: string = 'text-white dark:text-black';
    export let fill: string = 'fill-white dark:fill-black';
    export let ring: string = 'ring-transparent';
    export let weight: string = 'ring-1';
    export let rounded: string = 'rounded-lg';

    // Base Classes
    const cBase: string = 'inline-flex justify-center items-center space-x-2 text-center ring-inset pointer-cursor';
    let cSize: string;
    let cAnimation: string;
    
    // Set Size
    function setSize(): void {
        switch(size) {
            case('none'): cSize = 'text-base'; break;
            case('sm'):   cSize = 'text-sm px-3 py-2'; break;
            case('lg'):   cSize = 'text-lg px-6 py-3'; break;
            case('xl'):   cSize = 'text-xl px-7 py-3.5'; break;
            default:      cSize = 'text-base px-5 py-2.5'; // base
        }
    }

    // Set Variant Props
    function setProps(vSize: string, vBackground?: string, vColor?: string, vFill?: string, vRing?: string, vWeight?: string, vRounded?: string): void {
        if (variant) {
            if (vSize) size = vSize;
            if (vBackground) background = vBackground;
            if (vColor) color = vColor;
            if (vFill) fill = vFill;
            if (vRing) ring = vRing;
            if (vWeight) weight = vWeight;
            if (vRounded) rounded = vRounded;
        }
    }

    // Set Variant
    function setVariant(): void {
        switch(variant) {
            // Minimal
            case('minimal'): setProps('none'); break;
            // Text
            case('text'):         setProps('base', 'bg-transparent', 'text-black dark:text-white', 'fill-black dark:fill-white'); break;
            case('text-primary'): setProps('base', 'bg-transparent', 'text-primary-500', 'fill-primary-500'); break;
            case('text-accent'):  setProps('base', 'bg-transparent', 'text-accent-500', 'fill-accent-500'); break;
            case('text-warning'): setProps('base', 'bg-transparent', 'text-warning-500', 'fill-warning-500'); break;
            // Filled
            case('filled'):         setProps('base', null, null, null); break;
            case('filled-primary'): setProps('base', 'bg-primary-500', 'text-white', 'fill-white'); break;
            case('filled-accent'):  setProps('base', 'bg-accent-500', 'text-white', 'fill-white'); break;
            case('filled-warning'): setProps('base', 'bg-warning-500', 'text-white', 'fill-white'); break;
            // Ring
            case('ring'):         setProps(
                'base', 'bg-transparent', 'text-black dark:text-white', 'fill-black dark:fill-white', 'ring-black dark:ring-white'
            ); break;
            case('ring-primary'): setProps('base', 'bg-transparent', 'text-primary-500', 'fill-primary-500', 'ring-primary-500'); break;
            case('ring-accent'):  setProps('base', 'bg-transparent', 'text-accent-500', 'fill-accent-500', 'ring-accent-500'); break;
            case('ring-warning'): setProps('base', 'bg-transparent', 'text-warning-500', 'fill-warning-500', 'ring-warning-500'); break;
            // Ghost
            case('ghost'):         setProps(
                'base', 'bg-black/10 dark:bg-white/10', 'text-black dark:text-white', 'fill-black dark:fill-white', 'ring-black dark:ring-white'
            ); break;
            case('ghost-primary'): setProps('base', 'bg-primary-500/10', 'text-primary-500', 'fill-primary-500', 'ring-primary-500'); break;
            case('ghost-accent'):  setProps('base', 'bg-accent-500/10', 'text-accent-500', 'fill-accent-500', 'ring-accent-500'); break;
            case('ghost-warning'): setProps('base', 'bg-warning-500/10', 'text-warning-500', 'fill-warning-500', 'ring-warning-500'); break;
        }
    }

    // Set Animation - none on disabled
    function setAnimate(): void {
        cAnimation = $$props.disabled ? '' : 'hover:brightness-90 transition-transform active:scale-95';
    }

    // On Init
    setSize();
    setVariant();

    // After Update
    afterUpdate(() => {
        setSize();
        setVariant();
        setAnimate();
    });

    // Reactive Classes
    $: classes = `${cBase} ${cSize} ${background} ${color} ${fill} ${ring} ${weight} ${rounded} ${cAnimation}`;
</script>

{#if $$props.href}
    <!-- Anchor -->
    <a
        class="comp-button {classes} {$$props.class}"
        href={$$props.href}
        {...$$restProps}
        data-testid="comp-button"
    >
        {#if $$slots.lead}<span><slot name="lead"></slot></span>{/if}
        <span class="whitespace-nowrap"><slot /></span>
        {#if $$slots.trail}<span><slot name="trail"></slot></span>{/if}
    </a>
{:else}
    <!-- Button -->
    <button
        class="comp-button {classes} {$$props.class}"
        {...$$restProps}
        data-testid="comp-button"
    >
        {#if $$slots.lead}<span><slot name="lead"></slot></span>{/if}
        <span class="whitespace-nowrap"><slot /></span>
        {#if $$slots.trail}<span><slot name="trail"></slot></span>{/if}
    </button>
{/if}

<style lang="postcss">
    button:disabled, a:disabled { @apply opacity-30 cursor-not-allowed !important; }
</style>

