<!-- https://css-tricks.com/almanac/properties/l/list-style/ -->

<script lang='ts'>
    import {afterUpdate, getContext} from 'svelte';
    import type {Writable} from 'svelte/store';

    // Context
    let role: string = getContext('role');
    let active: Writable<any> = getContext('active');
    let multiple: boolean = getContext('multiple');
    let spacing: string = getContext('spacing');
    let accent: string = getContext('accent');
    let hover: string = getContext('hover');

    // Classes
    const cCompId: string = 'list-item';
    const cBase: string = 'list-inside';
    // - List Specific -
    const cDescription: string = 'list-none space-y-2';
    const cNavigation: string = `list-none ${hover} cursor-pointer px-4`;
    // - Styling -
    let cSpacing: string = '';

    // Set Spacing
    function setSpacing(): void {
        switch(spacing) {
            case('comfortable'): cSpacing = 'py-4'; break; 
            case('dense'):       cSpacing = 'py-1'; break;
            default:             cSpacing = 'py-3';
        }
    }

    // Nav - Handle Selection
    function select(v: any): void {
        if (!v) { return; }
        if (multiple) {
            // Create local copy of array
            const local: any[] = $active;
            // If is in list, prune it
            if(local.includes(v)){ 
                local.splice(local.indexOf(v), 1);
                active.set(local);
            }
            // If not in list, add it
            else{
                active.set([...local, v]);
            }
        } else {
            // Update singular value
            active.set(v);
        }
    }

    // Nav - Set Active
    function setActive(value: any, active: any): string {
        return active.includes(value) ? accent : '';
    }

    // Reactive
    afterUpdate(() => {
        setSpacing();
    });
    $: classes = `${cBase} ${cSpacing} ${$$props.class}`;
</script>

<!-- Description -->
{#if role === 'dl'}
<div class="{cCompId} {classes} {cDescription}" data-testid="list-item">
    <dt><slot name="dt" /></dt>
    <dd><slot name="dd" /></dd>
</div>

<!-- Nav -->
{:else if role === 'nav'}
<a
    href={$$props.href}
    on:click={() => {select($$props.value)}}
    class="{cCompId} {classes} {cNavigation} {setActive($$props.value, $active)}"
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
