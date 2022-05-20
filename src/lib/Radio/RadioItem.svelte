<script lang="ts">
    import type { Writable } from "svelte/store";
    import { getContext } from "svelte";

	export let value: any;
    
    // Get Context - get from parent
    export let selected: Writable<any> = getContext('selected');
    let background: string = getContext('background') || 'bg-primary-500';
    let color: string = getContext('color') || 'text-black dark:text-white';

    // Classes
    let cbase: string = `flex-1 text-base fill-black dark:fill-white px-5 py-2.5 cursor-pointer text-center`;
    let cSelected: string;

    // Store
    selected.subscribe(selected => {
        cSelected = value === selected ? ` ${background} ${color}` : ' bg-surface-300 dark:bg-surface-700';
    });

    // Reactive
    $: classes = `${cbase} ${cSelected}`;
</script>

<label class="radio-item {classes}" data-testid="radio-item">
    <input class="hidden" type="radio" {value} bind:group={$selected} />
    <div class="inline-block mx-auto"><slot /></div>
</label>
