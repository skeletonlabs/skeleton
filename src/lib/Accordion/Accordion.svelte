<script lang="ts">

let active: boolean = false;

let icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>`;

function toggleState(){
    if(active){ active = false; }
    else { active = true; }
}

let cIcon = 'w-4 dark:fill-surface-400 fill-surface-700';

$: iconState = active ? 'rotate-180' : '';
$: cBase = `cursor-pointer font-semibold flex p-2 hover:bg-surface-300/60 dark:hover:bg-surface-700/60 space-x-2`
$: contentState = active ? 'scale-100' : '-scale-y-0';
</script>
<div class="">
    <dt on:click={toggleState} class="{cBase}">
        <span><slot name="lead" /></span>
        <!-- Label Slot -->
        <span class="w-full"><slot name="label"/></span>

        <!-- Expand Icon -->
        <span class="w-4 flex dark:fill-surface-400 fill-surface-700 {iconState}">
            {@html icon}
        </span>   
    </dt>

    <!-- Content Slot -->
    {#if active}
        <dd class="p-4">
            <slot name="content"/>
        </dd>
    {/if}
</div>




