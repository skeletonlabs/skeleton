<script lang="ts">

import { getContext } from "svelte";
import { compute_rest_props } from "svelte/internal";
import type { Writable } from "svelte/store";

import { slide } from 'svelte/transition';

export let index: number = -1;
let activeState: boolean = false;

let icon: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>`;

let active: Writable<any> = getContext('active'); 
let multiple: boolean = getContext('multiple');

active.subscribe(value =>{
    if($active.includes(index)){ activeState = true;}
    else{activeState = false;}
})

// A rather non-elegant way of setting the array.
function toggleState(): void{
    if(multiple){
        if(activeState) { 
            activeState = false;
            let arr = $active;
            let i = arr.indexOf(index);
            arr.splice(i, 1);
            active.set(arr);
        }
        else {
            activeState = true;
            let arr = $active;
            arr.push(index);
            active.set(arr);
        }
    }
    else {
        if(activeState) {
            activeState = false;
            active.set([]);
        }
        else {
            activeState = true; 
            active.set([index]);
        }
    }
}

$: iconState = activeState ? 'rotate-180' : '';
$: cBase = ` cursor-pointer font-semibold flex p-2 hover:bg-surface-300/60 dark:hover:bg-surface-700/60 space-x-2`
$: cIcon = `${iconState} flex w-3 dark:fill-surface-400 fill-surface-700 transition-all duration-[0.4s]`;

</script>
<!-- Div used to provide spacing within the component elements - Not the spacing between Accordion comps-->
<div on:click class="accordion space-y-1 ${$$props.class}" data-testid="accordion">
    <dt on:click={toggleState} class="{cBase}">
        <!-- Lead Slot-->
        {#if $$slots.lead}
        <span><slot name="lead"/></span>
        {/if}
        <!-- Label Slot -->
        <span class="w-full flex self-center"><slot name="label"/></span>
        <!-- Expand Icon -->
        <span class="{cIcon}">
            {@html icon}
        </span>   
    </dt>

    <!-- Content Slot -->
    {#if activeState}
        <dd transition:slide class="pl-2">
            <slot name="content"/>
        </dd>
    {/if}
</div>




