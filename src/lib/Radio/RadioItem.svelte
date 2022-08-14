<script lang="ts">
    import type { Writable } from "svelte/store";
    import { createEventDispatcher, getContext } from "svelte";

    // Event Handler
    const dispatch = createEventDispatcher();

    // Props
	export let value: any = undefined;
    // A11y
    export let label: string = undefined;
    
    // Context
    export let selected: Writable<any> = getContext('selected');
    export let background: string = getContext('background');
    export let color: string = getContext('color');

    // Base Classes
    let cBaseItem: string = 'flex-1 text-base fill-black dark:fill-white px-5 py-2.5 cursor-pointer text-center';
    let cBaseUnselected: string = 'bg-surface-300 dark:bg-surface-700';
    let cBaseHover: string = 'hover:brightness-110';

    // A11y Input Handlers
    function onKeyDown(event: any): void {
        // Enter/Space triggers selecton event
        if (['Enter', 'Space'].includes(event.code)) {
            event.preventDefault();
            dispatch('keydown', event);
            event.target.click();
        }
    }

    // Reactive Classes
    $: isChecked = (value === $selected);
    $: cSelected = isChecked ? ` ${background} ${color}` : cBaseUnselected;
    $: classesItem = `${cBaseItem} ${cSelected} ${cBaseHover}`;
</script>

<div
    id={label}
    class="radio-item {classesItem}"
    data-testid="radio-item"
    on:keydown={onKeyDown}
    role="radio"
    aria-checked={isChecked}
    aria-label={label}
    tabindex="0"
>
    <input class="hidden" type="radio" {value} bind:group={$selected} />
    <label class="inline-block mx-auto" for={label}><slot /></label>
</div>
