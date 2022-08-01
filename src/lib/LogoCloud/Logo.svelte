<script lang="ts">
    import { getContext } from "svelte";

    // Context
    export let background = getContext('background');
    export let color = getContext('color');
    export let text = getContext('text');
    
    // Set tag and href values
    const tag: string = $$props.href ? 'a' : 'div';
    const href: any = $$props.href ? `href="${$$props.href}"` : undefined;

    // Base Classes
    const cBaseLogo: string = 'flex-auto text-center py-10 space-x-4 hover:brightness-110';

    // Reactive Classes
    $: classesLogo = `${cBaseLogo} ${background} ${color} ${text}`;

    // Prevents conflict with $$props.class
    delete $$restProps.class;
</script>

<svelte:element this={tag} class="logo {classesLogo} {$$props.class}" data-testid="logo" {...$$restProps}>

    <!-- Slot: lead -->
    {#if $$slots.lead}<slot name="lead"></slot>{/if}

    <!-- Slot: Label -->
    {#if $$slots.label}<span class="text-lg"><slot name="label"></slot></span>{/if}

    <!-- Default -->
    {#if !$$slots.lead && !$$slots.label}<slot />{/if}
    
</svelte:element>