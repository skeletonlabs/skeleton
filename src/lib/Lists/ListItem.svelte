<script lang='ts'>

    import {getContext} from 'svelte';
    import type {Writable} from 'svelte/store';
    export let icon: string = '';
    export let active: Writable<any> = getContext('active');
    export let value: any = null;
    let multiselect = getContext('multiselect');
    
    let selectable = getContext('selectable');
    let cStyle = getContext('style');
    let cActive: string = '';

    if(selectable){
        active.subscribe(active =>{
            cActive = value === active || active.includes(value) ? `bg-accent-500` : '';

        })
    }

    function processMultiselect(){
        if($active.includes(value)){ 
            let index = $active.indexOf(value); 
            $active.splice(index, 1);
        }
        else{
            $active = [...$active, value];
        }
        $active = $active;
    }

    $: classes = `${cStyle} ${cActive}`;
</script>

<li>
<label>
    <div class='listItem cursor-default'>
        <div on:click class='listItem {classes} pl-4 flex'>
            {#if icon}
            <span class='w-6 mr-4'>{@html icon}</span>
            {/if}
            {#if $$slots.icon}
                <div class='w-6 mr-4'>
                    <slot name='icon' />
                </div>
            {/if}
            {#if multiselect}
            <input class="hidden" type="checkbox" {value} on:change={processMultiselect} />
            {:else}     
            <input class="hidden" type="radio" {value} bind:group={$active} />
            {/if}
            <slot />
        </div>
    </div>
</label>
</li>