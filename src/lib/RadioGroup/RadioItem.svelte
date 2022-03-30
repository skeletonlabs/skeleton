<script lang="ts">
    import { getContext } from "svelte";

	export let value: any;
    export let active: any;

    // Get Context - get from parent
    let background: string = getContext('background') || 'bg-primary-500';
    let color: string = getContext('color') || 'text-black dark:text-white';

    // Base Classes
    let cbase: string = `radio-item fill-black dark:fill-white text-base px-5 py-2.5 cursor-pointer`;

    // Reactive
    $: cActive = value === active ? ` ${background} ${color}` : ' bg-surface-300 dark:bg-surface-700';
    $: classes = `${cbase} ${cActive}`;
</script>

<label class="{classes}">
    <input class="hidden" type="radio" {value} bind:group={active} />
    <slot />
</label>
