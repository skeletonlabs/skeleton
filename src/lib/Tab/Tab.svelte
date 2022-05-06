<script lang="ts">
    import type { Writable } from "svelte/store";
    import { getContext } from "svelte";

    export let selected: Writable<any> = getContext('selected');
    export let value = $selected.value;

    // Base Classes
    const cBaseItem: string = 'list-none flex items-center border-b-2 space-x-2 -mb-[2px] pb-2 px-4 hover:opacity-70 cursor-pointer';
    const cBaseLabel: string = 'font-semibold whitespace-nowrap';

    // Active State Styling
    $: highlight = value == $selected ? getContext('highlight') : 'border-transparent';
    $: textColor = value == $selected ? getContext('color') : '';

    // Reactive Classes
    $: classesItem = `${cBaseItem} ${textColor} ${highlight}`;
    $: classesLabel = `${cBaseLabel}`;
</script>

<li
    class="tab ${classesItem} {$$props.class}"
    on:click={()=>{selected.set(value)}}
    {...$$restProps}
>

    <!-- Slot: Lead -->
    {#if $$slots.lead}<span><slot name="lead"/></span>{/if}
    
    <!-- Label -->
    {#if $$slots.default}<span class="{classesLabel}"><slot /></span>{/if}

</li>