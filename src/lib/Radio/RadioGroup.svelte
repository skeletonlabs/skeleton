<script lang="ts">
    import type { Writable } from "svelte/store";
    import { setContext } from "svelte";

    // Props
    export let selected: Writable<any>;
    export let background: string = 'bg-primary-500';
    export let color: string = 'text-black dark:text-white';
    export let width: string = 'w-auto';
    // A11y
    export let label: string = 'radiogroup';
    
    // Context
    setContext('selected', selected);
    setContext('background', background);
    setContext('color', color);

    // Base Classes
    let cBaseGroup: string = `inline-flex items-center rounded overflow-hidden space-x-[2px]`;

    // Reactive
    $: classesGroup = `${cBaseGroup} ${width}`;
</script>

<div class="radio-group {classesGroup} {$$props.class||''}" data-testid="radio-group" role="radiogroup" aria-label={label}>
    <slot />
</div>
