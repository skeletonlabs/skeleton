<script lang="ts">
    import { setContext } from "svelte";

    export let background: string = undefined;
    export let color: string = undefined;

    // Set Context - provide to children
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
