<script lang="ts">
    import { createEventDispatcher, setContext } from 'svelte';
    import { writable, type Writable } from 'svelte/store';

    // Props
    export let active: Writable<number> = writable(0);
    export let length: number = 0;
    export let accent = 'bg-primary-500';
    export let background = 'bg-surface-300 dark:bg-surface-700';

    const dispatch = createEventDispatcher();

    // Context
    setContext('dispatch', dispatch);
    setContext('active', active);
    setContext('length', length);
    setContext('accent', accent);
    setContext('background', background);

    // Base Clssses
    const cBase: string = 'space-y-8';

    // Reactive Classes
    $: classes = `${cBase}`;
</script>

<div class="stepper {classes} {$$props.class}" data-testid="stepper">
    <slot />
</div>
