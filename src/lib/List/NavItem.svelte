<script lang='ts'>
    import {getContext, createEventDispatcher} from 'svelte';
    import type { Writable } from 'svelte/store';

    // Event Handler
    const dispatch = createEventDispatcher();

    // Context
    export let selected: Writable<any> = getContext('selected');
    export let highlight: string = getContext('highlight');
    export let hover: string = getContext('hover');

    // Base Classes
    const cBase: string = 'list-none py-3 px-4 cursor-pointer';
    const cRow: string = 'flex flex-row items-center space-x-4';

    // Nav - Handle Selection
    function onSelection(event: any, v: any): void {
        dispatch('click', event);
        if (!v) { return; }
        if (typeof($selected) === 'object') {
            const local: any[] = $selected;
            // Add
            if (local.includes(v)) { 
                local.splice(local.indexOf(v), 1);
                selected.set(local);
            }
            // Remove
            else {
                selected.set([...local, v]);
            }
        } else { selected.set(v); }
    }

    // Nav - set active class if selected
    function cSelected(value: any, selected: any): string {
        if (!selected) { return; }
        // List match -or- single value match
        const match: boolean = typeof(selected) === 'object' ? selected.includes(value) : selected === value;
        return match ? highlight : '';
    }

    // Reactive Classes
    $: classes = `${cBase} ${hover}`;
</script>

<a
    href={$$props.href}
    on:click={(e) => {onSelection(e, $$props.value)}}
    class="nav-item {classes} {cSelected($$props.value, $selected)} ${$$props.class}"
    data-testid="nav-item"
>
    <div class="{cRow}">

        <!-- Slot: Lead -->
        {#if $$slots.lead}
        <div class="flex-none"><slot name="lead" /></div>
        {/if}

        <!-- Slot: Content -->
        <div class="flex-1"><slot /></div>

        <!-- Slot: Trail -->
        {#if $$slots.trail}
        <div class="flex-none"><slot name="trail" /></div>
        {/if}
        
    </div>
</a>