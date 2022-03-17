<script lang="ts">

    import {setContext} from 'svelte';

    let cStyle: string = '';
    const separator: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"/></svg>`;
    
    export let items: any | null = null;
    export let styling: string = 'basic';

    if(styling == 'outlined') { cStyle = ' ring-1 ring-surface-600 hover:ring-primary-600 rounded-sm font-medium hover:bg-surface-300 dark:hover:bg-surface-700 transition-all ease-in-out duration-300'}
    if(styling == 'basic') { cStyle = 'hover:text-primary-700 dark:hover:text-primary-400 hover:underline font-medium'; }
    
    // Set the contexts to be retrieved by the slots
    setContext('seperatorContext', separator)
    setContext('styleContext', cStyle)

    $: listItems = items;

</script>

<div data-testid='breadcrumb' class="flex justify-start">
    <!-- If static list -->
    {#if items}
        {#each listItems as item, i}
            <!-- If disabled-->
            {#if !item.link}
                <p class='text-surface-400 font-medium'>{item.text}</p>
            {:else}
                <div>
                    <a data-testid='crumb' class="{cStyle} ${$$props.class}" href={item.link}>{item.text}</a>
                </div>
            {/if}
            <!-- Separator-->
            {#if i < items.length - 1}
            <div data-testid='separator' class="w-2 mr-4 ml-4 flex dark:invert opacity-20"> 
                {@html separator} 
            </div>
            {/if}
        {/each}
    {:else}

    <!-- If slotted child Crumb components -->
    <slot />
    {/if}
</div>
