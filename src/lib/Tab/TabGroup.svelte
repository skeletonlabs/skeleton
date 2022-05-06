<script lang="ts">
    import type { Writable } from "svelte/store";
    import { setContext } from "svelte";

    export let highlight: string = 'border-primary-500';
    export let color: string = 'text-primary-500';
    export let selected: Writable<any>;
    export let justify: string = 'justify-start';

    // Set Context
    setContext('highlight', highlight);
    setContext('color', color);
    setContext('selected', selected);

    // Classes
    const cBase: string = 'flex border-b border-surface-200 dark:border-surface-700';

    // Reactive Classes
    $: classes = `${cBase} ${justify}`
</script>

<nav class="tab-group {classes}">
    <slot />
</nav>
