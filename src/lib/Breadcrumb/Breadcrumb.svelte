<script lang="ts">
    import {setContext} from 'svelte';
    
    // Props
    export let variant: string = undefined;
    export let size: string = undefined;
    export let separator: string = `&rsaquo;`;

    // Context
    setContext('variant', variant);
    setContext('size', size);
    setContext('separator', separator);
</script>

<nav class="breadcrumb flex align-center space-x-4 {$$props.class}" data-testid='breadcrumb'>
    <slot />
</nav>
