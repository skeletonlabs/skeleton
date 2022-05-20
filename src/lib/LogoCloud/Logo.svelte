<script lang="ts">
    import { getContext } from "svelte";

    // Context
    export let background = getContext('background');
    export let color = getContext('color');
    export let text = getContext('text');

    // Base Classes
    const cBase: string = 'flex-auto text-center py-10 space-x-4';

    // Reactive Classes
    $: classes = `${cBase} ${background} ${color} ${text}`;
</script>

<div class="logo {classes} {$$props.class}" data-testid="logo">
    <!-- Default -->
    {#if !$$slots.icon && !$$slots.label}
        <slot />
    {/if}
    <!-- Icon -->
    {#if $$slots.icon}
        <slot name="icon"></slot>
    {/if}
    <!-- Label -->
    {#if $$slots.label}
        <span class="text-lg">
            <slot name="label"></slot>
        </span>
    {/if}
</div>