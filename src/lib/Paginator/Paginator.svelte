<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Button from "$lib/Button/Button.svelte";

    const dispatch = createEventDispatcher();

    // Props
    export let offset: number = 0;
    export let limit: number = 5;
    export let size: number = 10;
    export let amounts: number[] = [1,5,10,50,100];
    // Props: Design
    export let justify: string = 'justify-between';
    export let text: string = 'text-xs';
    export let select: string = undefined;
    // Props: Button
    export let variant: string = 'filled-primary';
    export let rounded: string = undefined;

    // Base Classes
    // const cBasePaginator: string = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
    const cBasePaginator: string = 'flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4';
    const cBaseText: string = 'opacity-60 whitespace-nowrap';

    // Functionality
    function onChangeLength(e: any): void { offset = 0; dispatch('amount', length); }
    function onPrev(): void { offset--; dispatch('page', offset); }
    function onNext(): void { offset++; dispatch('page', offset); }

    // Reactive Classes
    $: classesPaginator = `${cBasePaginator} ${justify}`;
    $: classesText = `${cBaseText} ${text}`;
</script>

<div class="paginator {classesPaginator} {$$props.class}" data-testid="paginator">
    
    <!-- Select Amount -->
    <div class="w-full md:w-auto">
        <select bind:value={limit} on:change={onChangeLength} class="{select}">
            {#each amounts as amount}<option value={amount}>Show {amount}</option>{/each}
        </select>
    </div>

    <!-- Context Text -->
    <div class="{classesText}">{offset*limit+1} to {offset*limit+limit} of <strong>{size}</strong></div>

    <!-- Arrows -->
    <div class="space-x-2">
        <Button {variant} {rounded} on:click={onPrev} disabled={offset===0}>&larr;</Button>
        <Button {variant} {rounded} on:click={onNext} disabled={(offset+1)*limit >= size}>&rarr;</Button>
    </div>

</div>