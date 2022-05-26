<script lang="ts">
    import { getContext } from "svelte";

    // Context
    export let background = getContext('background');
    export let color = getContext('color');
    export let text = getContext('text');

    // Base Classes
    const cBaseLogo: string = 'flex-auto text-center py-10 space-x-4';

    // Reactive Classes
    $: classesLogo = `${cBaseLogo} ${background} ${color} ${text}`;
</script>

<div class="logo {classesLogo} {$$props.class}" data-testid="logo">

    <!-- Slot: lead -->
    {#if $$slots.lead}<slot name="lead"></slot>{/if}

    <!-- Slot: Label -->
    {#if $$slots.label}<span class="text-lg"><slot name="label"></slot></span>{/if}

    <!-- Default -->
    {#if !$$slots.lead && !$$slots.label}<slot />{/if}
    
</div>