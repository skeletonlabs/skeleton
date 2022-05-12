<script lang="ts">
    import { writable, type Writable } from 'svelte/store';
    import Button from "$lib/Button/Button.svelte";

    export let active: Writable<number> = writable(0);
    export let max: number = 0;
    export let skippable: boolean = true;
    export let progressable: boolean = false;
    export let accent: string = 'bg-primary-500';
    export let text: string = 'text-black dark:text-white';
    export let variant: string = 'text';
    export let disabled: boolean = false;

    // Base Classes
    const cBaseStepper: string = 'flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4';
    const cbaseSteps: string = 'flex space-x-4 justify-center items-center';
    const cBaseNumbers: string = 'text-sm font-bold w-6 aspect-square flex justify-center items-center rounded-full transition-all duration-200';
    const cBaseActive: string = 'text-white';
    let cBaseInactive: string = 'bg-surface-300 dark:bg-surface-700';

    // If skippable true, set hover styles
    if (skippable) { cBaseInactive += ' hover:brightness-90 cursor-pointer'; }

    // Functionality
    function setActive(i: number): any {
        if (skippable === false) return;
        active.set(i);
    }
    function stepBack(): void { active.set($active - 1); }
    function stepNext(): void { active.set($active + 1); }

    // Reactive Classes
    $: classesStepper = `${cBaseStepper}`;
    $: classesSteps = `${cbaseSteps} ${text}`;
    $: classesNumbers = `${cBaseNumbers}`;
    $: classesActive = `${cBaseActive} ${accent}`;
</script>

<div class="stepper {classesStepper} {$$props.class}" data-testid="stepper">

    <!-- Steps -->
    <div class="flex-initial pb-[14px]">
        <!-- Numbers -->
        <nav class="numbers {classesSteps}">
            {#each Array(max) as _, i}
            <li class="step {classesNumbers} {$active === i ? classesActive : cBaseInactive}" on:click={()=>{setActive(i)}}>
                {#if progressable && $active > i}
                &check;
                {:else}
                {i + 1}
                {/if}
            </li>
            {/each}
        </nav>
        <!-- Line -->
        <div class="h-1 bg-surface-300 dark:bg-surface-700 -mt-[14px]"></div>
    </div>

    <!-- Label -->
    {#if $$slots.label}<div class="flex-auto"><slot name="label" /></div>{/if}

    <!-- Buttons -->
    <div class="flex-initial flex items-center space-x-4">
        <Button {variant} on:click={stepBack} disabled={$active === 0}>&larr;</Button>
        {#if ($active+1) < max}
            <Button {variant} on:click={stepNext} {disabled}>&rarr;</Button>
        {:else}
            {#if $$slots.complete}
            <slot name="complete" />
            {:else}
            <Button {variant} disabled>&rarr;</Button>
            {/if}
        {/if}
    </div>

</div>

<style lang="postcss">
    .active { @apply bg-primary-500; }
</style>