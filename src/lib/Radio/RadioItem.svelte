<script lang="ts">
    import type { Writable } from "svelte/store";
    import { getContext } from "svelte";

	export let value: any;
    
    // Get Context - get from parent
    export let selected: Writable<any> = getContext('selected');
    let background: string = getContext('background') || 'bg-primary-500';
    let color: string = getContext('color') || 'text-black dark:text-white';

    // Classes
    let cbase: string = `radio-item fill-black dark:fill-white text-base px-5 py-2.5 cursor-pointer`;
    let cSelected: string;

    // Store
    selected.subscribe(selected => {
        cSelected = value === selected ? ` ${background} ${color}` : ' bg-surface-300 dark:bg-surface-700';
    });

    // Reactive
    $: classes = `${cbase} ${cSelected}`;
</script>

<label class="{classes}" data-testid="radio-item">
    <input class="hidden" type="radio" {value} bind:group={$selected} />
    <slot />
</label>
