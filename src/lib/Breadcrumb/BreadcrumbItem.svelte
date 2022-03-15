<script lang="ts">

    import {getContext} from 'svelte';
    let divider = getContext('sep');

    export let currentPage: boolean = false;

    export let inactive: boolean = false;
    export let link: string = '';
    export let icon: any = '';

    let cBase = '';
    let style = '';
    if(!inactive) { cBase = 'hover:text-primary-400 hover:underline' }
    if(inactive) {cBase = 'text-surface-400'}
</script>

<div class="flex justify-evenly">
    {#if icon}
    <div class='pr-2'> {icon} </div>
    {/if}
    {#if link}
    <a href={link} class='{cBase} ${$$props.class}'>
        <slot />
    </a>
    {:else}
    <p class='{cBase}'>
        <slot />
    </p>
    {/if}
    
    {#if !currentPage}
    <div class="pl-2 pr-2"> {divider} </div>
    {/if}

</div>

