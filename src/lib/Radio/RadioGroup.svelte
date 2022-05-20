<script lang="ts">
    import type { Writable } from "svelte/store";
    import { setContext } from "svelte";

    export let selected: Writable<any>;
    export let background: string = undefined;
    export let color: string = undefined;
    export let width: string = 'w-auto';
    
    // Set Context - provide to children
    setContext('selected', selected);
    setContext('background', background);
    setContext('color', color);

    // Base Classes
    let cBase: string = `inline-flex items-center rounded overflow-hidden space-x-[2px]`;

    // Reactive
    $: classes = `${cBase} ${width}`;
</script>

<nav class="radio-group {classes} ${$$props.class}" data-testid="radio-group">
    <slot />
</nav>
