<!-- https://css-tricks.com/almanac/properties/l/list-style/ -->

<script lang='ts'>
    import {getContext} from 'svelte';

    // Context
    export let parentTag: string = getContext('parentTag');

    // Set Tag - use <div> for <dl>
    let tag: string = parentTag === 'dl' ? 'div' : 'li';

    // Base Classes
    const cBase: string = 'list-none py-3';
    const cRow: string = 'flex flex-row items-center space-x-4';
</script>

<svelte:element this={tag} class="list-item {cBase} {$$props.class}" data-testid="list-item" on:click role="menuitem" tabindex="0">
    <div class="{cRow}">

        <!-- Slot: Lead -->
        {#if $$slots.lead}
        <div class="flex-none"><slot name="lead" /></div>
        {/if}

        <!-- Slot: Content -->
        <div class="flex-1" class:space-y-1={parentTag === 'dl'}>
            <!-- dl -->
            {#if parentTag === 'dl'}
            <dt><slot name="dt" /></dt>
            <dd><slot name="dd" /></dd>
            <!-- li -->
            {:else}
            <div class="flex-1"><slot /></div>
            {/if}
        </div>

        <!-- Slot: Trail -->
        {#if $$slots.trail}
        <div class="flex-none"><slot name="trail" /></div>
        {/if}

    </div>
</svelte:element>
