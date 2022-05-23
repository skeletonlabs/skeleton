<script lang="ts">
    import type { Writable } from "svelte/store";
    import { getContext } from "svelte";

    // Props
	export let value: any;
    
    // Context
    export let selected: Writable<any> = getContext('selected');
    export let background: string = getContext('background');
    export let color: string = getContext('color');

    // Base Classes
    let cBaseItem: string = 'flex-1 text-base fill-black dark:fill-white px-5 py-2.5 cursor-pointer text-center';
    let cBaseUnselected: string = 'bg-surface-300 dark:bg-surface-700';
    
    // Reactive Classes
    $: cSelected = value === $selected ? ` ${background} ${color}` : cBaseUnselected;
    $: classesItem = `${cBaseItem} ${cSelected}`;
</script>

<label class="radio-item {classesItem}" data-testid="radio-item">
    <input class="hidden" type="radio" {value} bind:group={$selected} />
    <div class="inline-block mx-auto"><slot /></div>
</label>
