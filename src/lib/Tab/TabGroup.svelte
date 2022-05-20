<script lang="ts">
    import type { Writable } from "svelte/store";
    import { setContext } from "svelte";

    // Props
    export let selected: Writable<any>;
    export let justify: string = 'justify-start';
    export let highlight: string = 'border-primary-500';
    export let color: string = 'text-primary-500';

    // Set Context
    setContext('selected', selected);
    setContext('highlight', highlight);
    setContext('color', color);

    // Classes
    const cBaseGroup: string = 'flex border-b-2 border-surface-300 dark:border-surface-700';

    // Reactive Classes
    $: classesGroup = `${cBaseGroup} ${justify}`
</script>

<nav data-testid="tab-group" class="tab-group {classesGroup}" {...$$restProps}>
    <slot />
</nav>
