<script lang="ts">
	export let items = [];
	export let active;

    // Base Classes
    let cBase: string = `inline-flex items-center rounded overflow-hidden space-x-[2px]`;
    let cLabel: string = `bg-surface-300 dark:bg-surface-700 text-black dark:text-white fill-black dark:fill-white text-base px-5 py-2.5 cursor-pointer`;

    // Reactive
    $: classesBase = `${cBase} ${$$props.class}`;
    $: classesLabel = `${cLabel}`;
</script>

<nav class="{classesBase}">
    {#each items as { label, value }}
        <label class="{classesLabel}" class:active={active == value}>
            <input class="hidden" type="radio" {value} bind:group={active} />
            {@html label}
        </label>
    {/each}
</nav>

<style lang="postcss">
    .active { @apply bg-primary-500; }
</style>