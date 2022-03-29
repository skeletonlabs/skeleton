<script lang="ts">
    import { setContext } from "svelte";

    // Parent Props
    export let space: string = 'space-x-[2px]';
    export let rounded: string = 'rounded-lg';

    // Child Prop Passthrough
    export let background: string = 'bg-surface-300 dark:bg-surface-700';
    export let color: string = undefined;

    // Base Classes
    let cBase: string = `button-group inline-flex overflow-hidden`;

    // Context
    $: setContext('background', background);
    $: setContext('color', color);
    $: setContext('rounded', 'none');

    // Reactive
    $: classes = `${cBase} ${space} ${rounded}`;
</script>

<nav class="{classes}">
    <slot />
</nav>