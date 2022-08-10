<script lang='ts'>
    import {getContext, createEventDispatcher} from 'svelte';
    import type { Writable } from 'svelte/store';

    // Event Handler
    const dispatch = createEventDispatcher();
    
    // A11y
    export let role: string = 'listitem';
    export let label: string = undefined;
    export let setsize: number = undefined;
    export let posiniset: number = undefined;

    // Context
    export let selected: Writable<any> = getContext('selected');
    export let highlight: string = getContext('highlight');
    export let hover: string = getContext('hover');

    // Base Classes
    const cBase: string = 'list-none py-3 px-4 cursor-pointer';
    const cRow: string = 'flex flex-row items-center space-x-4';

    // A11y Input Handler
    function onKeyDown(event: any, v: any): void {
        if (['Enter', 'Space'].includes(event.code)) {
            event.preventDefault();
            dispatch('keydown', event);
            onClick(event, v);
        }
    }

    // Handle Selection
    function onClick(event: any, v: any): void {
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

    // Determine selection state
    function cSelected(value: any, selected: any): boolean {
        return typeof(selected) === 'object' ? selected.includes(value) : selected === value;
    }

    // Reactive Classes
    $: isSelected = selected && cSelected($$props.value, $selected);
    $: classesSelected = isSelected ? highlight : '';
    $: classesBase = `${cBase} ${hover} ${classesSelected}`;
</script>

<a
    href={$$props.href}
    on:click={(e) => {onClick(e, $$props.value)}}
    on:keydown={(e) => {onKeyDown(e, $$props.value)}}
    class="list-item {classesBase} ${$$props.class}"
    data-testid="list-item"
    {role}
    aria-label={label}
    aria-selected={isSelected}
    aria-setsize={setsize}
    aria-posinset={posiniset}
    tabindex="0"
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