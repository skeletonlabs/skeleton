<script lang='ts'>

    import {getContext} from 'svelte';
    import type {Writable} from 'svelte/store';

    // Exported props
    export let icon: string             = '';
    export let active: Writable<any>    = getContext('active');
    export let value: any               = null;
    let multiselect                     = getContext('multiselect');
    
    let selectable: boolean     = getContext('selectable');
    let cStyle: string          = getContext('style');
    let cActive: string         = '';

    if(selectable){
        active.subscribe(active =>{
            // Set the active color state and override default hover color when active for both dark/light modes
            cActive = value === active || active.includes(value) ? `bg-accent-500 dark:hover:bg-accent-500 light:hover:bg-accent-500` : '';
        })
    }

    // Process the array of items. This means the writable store on the top level page must be initialized as an array
    // FIX ME: Use active.set instead of assigning the array to itself by the end of the statement
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

    // Combined classes
    $: classes = `${cStyle} ${cActive}`;
</script>

<li>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>     
            <div on:click class='listItem {classes} pl-4 flex cursor-default'>
                <!--Icon prop-->
                {#if icon}
                <span class='w-6 mr-4'>{@html icon}</span>
                {/if}
                <!--Prefixed Content/Icon slot-->
                {#if $$slots.icon}
                    <div class='w-6 mr-4'>
                        <slot name='icon' />
                    </div>
                {/if}

                <!--Selectors-->
                {#if multiselect}
                <input class="hidden" type="checkbox" {value} on:change={processMultiselect} />
                {:else}     
                <input class="hidden" type="radio" {value} bind:group={$active} />
                {/if}
                
                <!--Text/Label-->
                <slot />

            </div>
    </label>
</li>