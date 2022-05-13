<!-- TODO: make length/index automatic? -->

<script lang="ts">
    import { setContext } from 'svelte';
    import { writable, type Writable } from 'svelte/store';

    // Props
    export let active: Writable<number> = writable(0);
    export let length: number = 0;

    // Context
    setContext('active', active);
    setContext('length', length);
    // TODO: add accent context
    // TODO: add timeline context

    // Base Clssses
    const cBase: string = 'space-y-8';

    // Reactive Classes
    $: classes = `${cBase}`;
</script>

<div class="stepper {classes} {$$props.class}" data-testid="stepper">
    <slot />
</div>

<style lang="postcss">
    /* .stepper { @apply ; } */
</style>