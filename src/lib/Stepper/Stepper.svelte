<script lang="ts">
    import { createEventDispatcher, setContext } from 'svelte';
    import { writable, type Writable } from 'svelte/store';

    // Event Dispacher
    const dispatch = createEventDispatcher();

    // Props
    export let active: Writable<number> = writable(0);
    export let length: number = 0;
    export let accent: string = 'bg-primary-500';
    export let background: string = 'bg-surface-300 dark:bg-surface-700';

    // Context
    setContext('dispatch', dispatch);
    setContext('active', active);
    setContext('length', length);
    setContext('accent', accent);
    setContext('background', background);

    // Base Clssses
    const cBaseStepper: string = 'space-y-8';
</script>

<div class="stepper {cBaseStepper} {$$props.class}" data-testid="stepper">
    <slot />
</div>
