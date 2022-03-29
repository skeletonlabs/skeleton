<script lang="ts">
    import {setContext} from 'svelte';
    
    // Props
    export let variant: string = 'minimal';
    export let size: string = undefined;
    export let separator: string = `<svg class="fill-surface-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"/></svg>`;

    // Context
    setContext('variant', variant);
    setContext('size', size);
    setContext('separator', separator);
</script>

<nav class="breadcrumb flex align-center space-x-4" data-testid='breadcrumb'>
    <slot />
</nav>
