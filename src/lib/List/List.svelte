<script lang='ts'>
    import { afterUpdate, setContext } from 'svelte';
    import type { Writable } from 'svelte/store';

    // Props
    export let role: string = 'ul';
    export let selected: Writable<any> = undefined; // (store)
    export let spacing: string = undefined; // comfortable | dense
    export let highlight: string = '!bg-primary-500'; // '!' required
    export let hover: string = 'hover:bg-primary-500/10'; // 'hover:' required

    // Context
    setContext('role', role);
    setContext('selected', selected);
    setContext('spacing', spacing);
    setContext('highlight', highlight);
    setContext('hover', hover);

    // Classes
    // const cBase: string = '';
    let cSpacing: string = 'space-y-1';

    // Set Spacing
    function setSpacing(): void {
        switch(spacing) {
            case('comfortable'): cSpacing = 'space-y-4'; break; 
            case('dense'):       cSpacing = 'space-y-0'; break;
            default:             cSpacing = 'space-y-1';
        }
    }

    // Reactive
    afterUpdate(() => {
        setSpacing();
    });
    $: classes = `${cSpacing} ${$$props.class}`;
</script>

<!-- Description -->
{#if role === 'dl'}
<dl class="list-group {classes}" data-testid="list-group"><slot /></dl>
<!-- Nav -->
{:else if role === 'nav'}
<nav class="list-group {classes}" data-testid="list-group"><slot /></nav>
<!-- Ordered -->
{:else if role === 'ol'}
<ol class="list-group {classes}" data-testid="list-group"><slot /></ol>
<!-- Unordered -->
{:else}
<ul class="list-group {classes}" data-testid="list-group"><slot /></ul>
{/if}
