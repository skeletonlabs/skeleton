<script lang="ts">
    import type { Writable } from "svelte/store";
    import { getContext } from "svelte";

	export let value: any;
    
    // Get Context - get from parent
    export let active: Writable<any> = getContext('active');
    let background: string = getContext('background') || 'bg-primary-500';
    let color: string = getContext('color') || 'text-black dark:text-white';

    // Classes
    let cbase: string = `radio-item fill-black dark:fill-white text-base px-5 py-2.5 cursor-pointer`;
    let cActive: string;

    // Store
    active.subscribe(active => {
        cActive = value === active ? ` ${background} ${color}` : ' bg-surface-300 dark:bg-surface-700';
    });

    // Reactive
    $: classes = `${cbase} ${cActive}`;
</script>

<label class="{classes}" data-testid="radio-item">
    <input class="hidden" type="radio" {value} bind:group={$active} />
    <slot />
</label>
