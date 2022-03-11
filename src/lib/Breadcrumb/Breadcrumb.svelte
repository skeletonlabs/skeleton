<script lang="ts">
    export let separator: string = '>';
    export let items: any = [];
    let activeStyle = 'mr-2 hover:underline-offset-2 hover:underline hover:cursor-pointer';

</script>

<div class="flex justify-start align-center items-center">
    {#each items as item, i}
  
    {#if item.icon}
    <p class='mr-2'>{item.icon}</p>
    {/if}
    <a data-testid='breadcrumb' href='{item.link}' class="{item.link ? activeStyle : ''}" class:disabled={item.disabled}>
        {item.text}
    </a>
    {#if i != items.length - 1}
        <p data-testid='separator' class='mr-2'>{separator}</p>
    {/if}
  
    {/each}
</div>