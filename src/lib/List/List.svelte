<script lang='ts'>
    import { setContext } from 'svelte';
    import type { Writable } from 'svelte/store';

    // Props
    export let role: string = 'ul';
    export let selected: Writable<any> = undefined; // (store)
    export let highlight: string = '!bg-primary-500'; // '!' required
    export let hover: string = 'hover:bg-primary-500/10'; // 'hover:' required

    // Context
    setContext('role', role);
    setContext('selected', selected);
    setContext('highlight', highlight);
    setContext('hover', hover);

    // Classes
    const cBase: string = 'whitespace-nowrap space-y-1';
    let cSpacing: string = 'space-y-1';

    // Reactive Classes
    $: classes = `${cBase} ${cSpacing} ${$$props.class}`;
</script>

<svelte:element this={role} class="list-group {classes}" data-testid="list-group">
    <slot />
</svelte:element>
