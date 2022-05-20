<script lang="ts">
    import { getContext } from "svelte";
    import { slide } from 'svelte/transition';
    import type { Writable } from "svelte/store";

    // Props
    export let value: number = undefined;
    export let hover: string = 'hover:bg-primary-500/10';
    export let spacing: string = 'space-y-0';
    export let padding: string = 'p-2';

    // Context
    let selected: Writable<any> = getContext('selected'); 
    let multiple: boolean = getContext('multiple');

    // Base Classes
    const cBase: string = 'space-y-4';
    const cBaseTitle: string = 'flex items-center space-x-4 p-2 cursor-pointer rounded';
    const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[250ms]';
    const cBaseDesc: string = '';

    // Toggle Handler
    function onToggle(): void{
        multiple === true ? handleMultipleToggle() : handleDefaultToggle();
    }
    function handleDefaultToggle(): void {
        let v = $selected.includes(value) ? [] : [value];
        selected.set(v);
    }
    function handleMultipleToggle(): void {
        let selectedArr: any[] = $selected;
        if ($selected.includes(value)) { 
            let i: number = selectedArr.indexOf(value);
            selectedArr.splice(i, 1);
        } else {
            let selectedArr: any[] = $selected;
            selectedArr.push(value);
        }
        selected.set(selectedArr);
    }

    // Reactive Classes
    $: classesAccordian = `${cBase} ${spacing}`;
    $: classesTitle = `${cBaseTitle} ${hover}`;
        $: classesIconState = $selected.includes(value) ? '-rotate-180' : '';
        $: classesIcon = `${cBaseIcon} ${classesIconState}`;
    $: classesDesc = `${cBaseDesc} ${padding}`;
</script>

{#if value === undefined}<p class="!text-warning-500">Item missing value property.</p>{:else}
<div on:click class="accordion-item {classesAccordian} {$$props.class}" data-testid="accordion-item" {...$$restProps}>

    <!-- Title -->
    <dt class="{classesTitle}" on:click={onToggle}>
        <!-- Slot: Lead -->
        {#if $$slots.lead}<div><slot name="lead"/></div>{/if}
        <!-- Slot: Title -->
        <div class="flex-auto"><slot name="title"/></div>
        <!-- Caret -->
        <div class="{classesIcon}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
        </div>
    </dt>

    <!-- Description -->
    {#if $selected.includes(value)}
    <dd class="{classesDesc}" transition:slide|local><slot name="description"/></dd>
    {/if}

</div>
{/if}
