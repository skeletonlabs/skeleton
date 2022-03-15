<script lang="ts">

    export let separator = '>';
    export let items = null;
    import {setContext} from 'svelte';
 
    // Set the contexts to be retrieved by the slots
    setContext('seperatorContext', separator)

</script>

<div class="flex justify-start">
    {#if items}
        {#each items as item, i}
            <div>
                <a href={item.link}>{item.text}</a>
            </div>
            {#if i < items.length - 1}
            <p class='pl-2 pr-2'>{separator}</p>
            {/if}
        {/each}
    {:else}
    <slot />
    {/if}
</div>
