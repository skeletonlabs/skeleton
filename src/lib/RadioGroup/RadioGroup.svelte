<script lang="ts">
    import type { Writable } from "svelte/store";
    import { setContext } from "svelte";

    export let active: Writable<any>;
    export let background: string = undefined;
    export let color: string = undefined;
    
    // Set Context - provide to children
    setContext('active', active);
    setContext('background', background)
    setContext('color', color)

    // Base Classes
    let cBase: string = `radio-group inline-flex items-center rounded overflow-hidden space-x-[2px]`;

    // Reactive
    $: classes = `${cBase} ${$$props.class}`;
</script>

<nav class="{classes}">
    <slot />
</nav>
