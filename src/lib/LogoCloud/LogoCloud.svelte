<script lang="ts">
    import { setContext } from "svelte";

    // Props
    export let background: string = 'bg-surface-200 dark:bg-surface-800';
    export let color: string = 'text-black dark:text-white';
    export let text: string = 'text-base font-bold';

    // Context
    setContext('background', background);
    setContext('color', color);
    setContext('text', text);

    // Base Classes
    const cBaseCloud: string = 'flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-1 overflow-hidden rounded-xl';
</script>

<div class="{cBaseCloud} {$$props.class}" data-testid="logo-cloud">
    <slot />
</div>