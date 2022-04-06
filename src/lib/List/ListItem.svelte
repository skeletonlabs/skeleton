<!-- https://css-tricks.com/almanac/properties/l/list-style/ -->

<script lang='ts'>
    import {afterUpdate, getContext, createEventDispatcher} from 'svelte';
    import type {Writable} from 'svelte/store';

    // Context
    export let role: string = getContext('role');
    export let selected: Writable<any> = getContext('selected');
    export let spacing: string = getContext('spacing');
    export let highlight: string = getContext('highlight');
    export let hover: string = getContext('hover');

    // Event Handler
    const dispatch = createEventDispatcher();

    // Classes
    const cCompId: string = 'list-item';
    const cBase: string = 'list-inside';
    // - List Specific -
    const cDescription: string = 'list-none space-y-2';
    const cNavigation: string = `list-none ${hover} cursor-pointer px-4`;
    // - Styling -
    let cSpacing: string = 'py-3';

    // Set Spacing
    function setSpacing(): void {
        switch(spacing) {
            case('comfortable'): cSpacing = 'py-4'; break; 
            case('dense'):       cSpacing = 'py-1'; break;
            default:             cSpacing = 'py-3';
        }
    }

    // Nav - Handle Selection
    function onSelection(event: any, v: any): void {
        if (!v) { return; }
        // Dispatch Event
        dispatch('click', event);
        // Selection Handler
        if (typeof($selected) === 'object') {
            // Create local copy of array
            const local: any[] = $selected;
            // If is in list, prune it
            if (local.includes(v)) { 
                local.splice(local.indexOf(v), 1);
                selected.set(local);
            }
            // If not in list, add it
            else { selected.set([...local, v]); }
        // Update singular value
        } else { selected.set(v); }
    }

    // Nav - set active class if selected
    function isSelected(value: any, selected: any): string {
        if (!selected) { return; }
        // List match -or- single value match
        const match: boolean = typeof(selected) === 'object' ? selected.includes(value) : selected === value;
        return match ? highlight : '';
    }

    // Reselected
    afterUpdate(() => {
        setSpacing();
    });
    $: classes = `${cBase} ${cSpacing} ${$$props.class}`;
</script>

<!-- Description -->
{#if role === 'dl'}
<div class="{cCompId} {classes} {cDescription}" data-testid="list-item">
    <div class="flex flex-row items-center space-x-4">
        <!-- Lead -->
        {#if $$slots.lead}
        <div class="flex-none"><slot name="lead" /></div>
        {/if}
        <!-- Content -->
        <div class="flex-1">
            <dt><slot name="dt" /></dt>
            <dd><slot name="dd" /></dd>
        </div>
        <!-- Trail -->
        {#if $$slots.trail}
        <div class="flex-none"><slot name="trail" /></div>
        {/if}
    </div>
</div>

<!-- Nav -->
{:else if role === 'nav'}
<a
    href={$$props.href}
    on:click={(e) => {onSelection(e, $$props.value)}}
    class="{cCompId} {classes} {cNavigation} {isSelected($$props.value, $selected)}"
    data-testid="list-item"
>
    <div class="flex flex-row items-center space-x-4">
        <!-- Lead -->
        {#if $$slots.lead}
        <div class="flex-none"><slot name="lead" /></div>
        {/if}
        <!-- Content -->
        <div class="flex-1"><slot /></div>
        <!-- Trail -->
        {#if $$slots.trail}
        <div class="flex-none"><slot name="trail" /></div>
        {/if}
    </div>
</a>

<!-- Ordered -->
{:else if role === 'ol'}
<li class="{cCompId} {classes}" data-testid="list-item">
    <div class="flex flex-row items-center space-x-4">
        <!-- Lead -->
        {#if $$slots.lead}
        <div class="flex-none"><slot name="lead" /></div>
        {/if}
        <!-- Content -->
        <div class="flex-1"><slot /></div>
        <!-- Trail -->
        {#if $$slots.trail}
        <div class="flex-none"><slot name="trail" /></div>
        {/if}
    </div>
</li>

<!-- Unordered -->
{:else}
<li class="{cCompId} {classes}" data-testid="list-item">
    <div class="flex flex-row items-center space-x-4">
        <!-- Lead -->
        {#if $$slots.lead}
        <div class="flex-none"><slot name="lead" /></div>
        {/if}
        <!-- Content -->
        <div class="flex-1"><slot /></div>
        <!-- Trail -->
        {#if $$slots.trail}
        <div class="flex-none"><slot name="trail" /></div>
        {/if}
    </div>
</li>
{/if}
