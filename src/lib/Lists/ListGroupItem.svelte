<script lang='ts'>

    import Divider from '$lib/Divider/Divider.svelte';
import {getContext} from 'svelte'

    let roleContext = getContext('roleContext');

</script>

<div class='p-2 bg-slate-900'>
    <slot name ='slot' />
    {#if roleContext == 'nav'}

    {/if}
    <slot />
    <slot name ='check' />
</div>