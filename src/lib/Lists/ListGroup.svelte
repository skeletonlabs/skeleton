<script lang='ts'>

    import Divider from "$lib/Divider/Divider.svelte";

    export let listItems: any = [];
    export let divided: boolean = false;
    export let active: boolean = false;
    export let checkList: boolean = true;
    export let size: string = '';
    export let itemStyle = '';
    export let variant = 'nav';    // Nav, Ordered, Unordered

    switch(size){
        case('comfortable'): { itemStyle += 'p-4 pl-4'; break;}
        case('dense'): { itemStyle += 'p-3 pl-4'; break;}
        case('compact'): { itemStyle += 'p-2 pl-4'; break;}
        default: { itemStyle += 'p-2 pl-4'; break;}
    }

    if(active) {itemStyle += ' hover:bg-surface-300 dark:hover:bg-surface-700 hover:cursor-pointer';}
    
</script>
<div data-testid='listGroup' class='listGroup'>
    {#each listItems as item, i}
    <div class='listItem flex justify-start {itemStyle}'>
        {#if item.icon}
        <div class='w-8 mr-4'>{@html item.icon}</div>
        {/if}
        <span>
            {#if item.href}
                <a href={item.href}>{item.label}</a>
            {:else}
                <p>{item.label}</p>
            {/if}
        </span>
    </div>
    {#if divided && i !== listItems.length - 1}
    <Divider />
    {/if}
    {/each}  
</div>