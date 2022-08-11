<script lang='ts'>
    import {createEventDispatcher, getContext} from 'svelte';
    import type { Writable } from 'svelte/store';

    // Event Handler
    const dispatch = createEventDispatcher();

    // Props
    // NOTE: 'value' is handled by $$props.value
    // A11y
    export let setsize: number = undefined;
    export let posinset: number = undefined;

    // Context
    export let parentTag: string = getContext('parentTag');
    export let selected: Writable<any> = getContext('selected');
    export let highlight: string = getContext('highlight');
    export let hover: string = getContext('hover');

    // Base Classes
    const cBase: string = 'list-none px-4 py-3 flex flex-row items-center space-x-4';
    const cItemHover: string = `${hover} cursor-pointer`;

    // Local
    let elemItem: HTMLElement;
    let tag: string = parentTag === 'dl' ? 'div' : 'li';
    let role: string = parentTag === 'nav' ? 'option' : undefined;

    // A11y Input Handler
    function onKeyDown(event: any): void {
        if (['Enter', 'Space'].includes(event.code)) {
            event.preventDefault();
            dispatch('keydown', event);
            parentTag === 'nav' ? elemItem.querySelector('a').click() : elemItem.click();
        }
    }

    // Input Handler
    function onClickHandler(): void {
        if (!$selected || !$$props.value) { return; }
        typeof($selected) === 'object' ? handleMultiSelect() : handleSingleSelect();
    }
    function handleSingleSelect(): void {
        selected.set($$props.value);
    }
    function handleMultiSelect(): void {
        const v: any = $$props.value;
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
    }

    // Reactive Selection State
    $: isSelected = () => {
        if ($selected && $$props.value) {
            return typeof($selected) === 'object' ? $selected.includes($$props.value) : $selected === $$props.value;
        }
        return false;
    };
    // Reactive Clases
    $: classesHighlight = isSelected() ? highlight : '';
    $: classesHover = parentTag === 'nav' ? cItemHover : '';
    $: classesBase = `list-row ${cBase} ${classesHover} ${classesHighlight}`;
</script>

<svelte:element
    bind:this={elemItem}
    this={tag}
    class={classesBase}
    data-testid="list-row"
    on:click={onClickHandler}
    on:keydown={onKeyDown}
    {role}
    tabindex="0"
>

    <!-- Slot: Lead -->
    {#if $$slots.lead}
    <div class="flex-none"><slot name="lead" /></div>
    {/if}

    <!-- Slot: Content -->
    {#if parentTag === 'nav'}
        <a
            href={$$props.href}
            class="flex-1 block"
            aria-setsize={setsize}
            aria-posinset={posinset}>
            <slot />
        </a>
    {:else}
        <div class="flex-1">
            {#if parentTag === 'dl'}
                <dt><slot name="dt" /></dt>
                <dd><slot name="dd" /></dd>
            {:else}
                <slot />
            {/if}
        </div>
    {/if}

    <!-- Slot: Trail -->
    {#if $$slots.trail}
    <div class="flex-none"><slot name="trail" /></div>
    {/if}

</svelte:element>
