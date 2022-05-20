<script lang="ts">
    import {setContext} from 'svelte';
    
    // Props
    export let separator: string = `&rsaquo;`;

    // Base Classes
    const cBaseBreadcrumb: string = 'flex align-center space-x-4';

    // Context
    setContext('separator', separator);
</script>

<nav class="breadcrumb {cBaseBreadcrumb} {$$props.class}" data-testid='breadcrumb'>
    <slot />
</nav>
