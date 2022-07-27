<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props
    export let variant: string = undefined;
    export let size: string = 'base';
    export let background: string = 'bg-black dark:bg-white';
    export let color: string = 'text-white dark:text-black';
    export let fill: string = 'fill-white dark:fill-black';
    export let ring: string = 'ring-transparent';
    export let weight: string = 'ring-1';
    export let width: string = 'w-auto';
    export let rounded: string = 'rounded-lg';

    // Set tag and href values
    const tag: string = $$props.href ? 'a' : 'button';
    const href: any = $$props.href ? `href="${$$props.href}"` : undefined;

    // Base Classes
    const cBaseButton: string = 'inline-flex justify-center items-center space-x-2 text-center whitespace-nowrap ring-inset pointer-cursor';
    
    // Set Size
    let cSize: string;
    function setSize(): void {
        switch(size) {
            case('none'): cSize = 'text-base'; break;
            case('sm'):   cSize = 'text-sm px-3 py-2'; break;
            case('lg'):   cSize = 'text-lg px-6 py-3'; break;
            case('xl'):   cSize = 'text-xl px-7 py-3.5'; break;
            default:      cSize = 'text-base px-5 py-2.5'; // base
        }
    }

    // Set Variant Styles
    // TODO: refactor and improve this
    function setProps(vBackground?: string, vColor?: string, vFill?: string, vRing?: string, vWeight?: string, vSize?: string): void {
        if (variant) {
            if (vSize) size = vSize;
            if (vBackground) background = vBackground;
            if (vColor) color = vColor;
            if (vFill) fill = vFill;
            if (vRing) ring = vRing;
            if (vWeight) weight = vWeight;
        }
    }
    function setVariant(): void {
        switch(variant) {
            // Minimal
            case('minimal'): setProps('bg-transparent', 'text-initial', 'fill-initial', null, 'none', 'none'); break;
            // Text
            case('text'):         setProps('bg-transparent', 'text-black dark:text-white', 'fill-black dark:fill-white'); break;
            case('text-primary'): setProps('bg-transparent', 'text-primary-500', 'fill-primary-500'); break;
            case('text-accent'):  setProps('bg-transparent', 'text-accent-500', 'fill-accent-500'); break;
            case('text-warning'): setProps('bg-transparent', 'text-warning-500', 'fill-warning-500'); break;
            // Filled
            case('filled'):         setProps(null, null, null); break;
            case('filled-primary'): setProps('bg-primary-500', 'text-white', 'fill-white'); break;
            case('filled-accent'):  setProps('bg-accent-500', 'text-white', 'fill-white'); break;
            case('filled-warning'): setProps('bg-warning-500', 'text-white', 'fill-white'); break;
            // Ring
            case('ring'):         setProps(
                'bg-transparent', 'text-black dark:text-white', 'fill-black dark:fill-white', 'ring-black dark:ring-white'
            ); break;
            case('ring-primary'): setProps('bg-transparent', 'text-primary-500', 'fill-primary-500', 'ring-primary-500'); break;
            case('ring-accent'):  setProps('bg-transparent', 'text-accent-500', 'fill-accent-500', 'ring-accent-500'); break;
            case('ring-warning'): setProps('bg-transparent', 'text-warning-500', 'fill-warning-500', 'ring-warning-500'); break;
            // Ghost
            case('ghost'):         setProps(
                'bg-black/10 dark:bg-white/10', 'text-black dark:text-white', 'fill-black dark:fill-white', 'ring-black dark:ring-white'
            ); break;
            case('ghost-primary'): setProps('bg-primary-500/10', 'text-primary-500', 'fill-primary-500', 'ring-primary-500'); break;
            case('ghost-accent'):  setProps('bg-accent-500/10', 'text-accent-500', 'fill-accent-500', 'ring-accent-500'); break;
            case('ghost-warning'): setProps('bg-warning-500/10', 'text-warning-500', 'fill-warning-500', 'ring-warning-500'); break;
        }
    }

    // On Init
    setSize();
    setVariant();

    // After Update
    afterUpdate(() => {
        setSize();
        setVariant();
    });

    // Reactive Classes
    $: cDisabled = $$props.disabled ? '!opacity-30 !cursor-not-allowed' : 'hover:brightness-90 transition-transform active:scale-95';
    $: classesButton = `${cBaseButton} ${cSize} ${background} ${color} ${fill} ${ring} ${weight} ${width} ${rounded} ${cDisabled}`;

    // Prevents conflict with $$props.class
    delete $$restProps.class;
</script>

<svelte:element
    this={tag}
    class="comp-button {classesButton} {$$props.class}"
    {href}
    data-testid="comp-button"
    on:click
    {...$$restProps}
>
    {#if $$slots.lead}<span><slot name="lead"></slot></span>{/if}
    <span><slot /></span>
    {#if $$slots.trail}<span><slot name="trail"></slot></span>{/if}
</svelte:element>

