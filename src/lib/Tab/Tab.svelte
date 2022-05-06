<script lang="ts">

import type { Writable } from "svelte/store";
import { getContext } from "svelte";

export let selected: Writable<any> = getContext('selected');
export let value = null;

$: color = value == $selected ? getContext('color') : 'border-surface-300 dark:border-surface-700';
$: textColor = value == $selected ? getContext('text') : '';

$: classes = `list-none flex pb-1 space-x-2 ${color} border-b-2 -mb-[2px] items-center transition-all duration-[0.2s] hover:opacity-70`
$: classesText = `font-semibold whitespace-nowrap`;

</script>

<li on:click={()=>{selected.set(value)}} data-testid="tab" class='tab ${classes} {$$props.class} {textColor}'>
    {#if $$slots.lead}
    <slot name="lead"/>
    {/if}
    <button>
        <span class="{classesText}">
            <slot />
        </span>
    </button>
</li>