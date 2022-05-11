<script lang="ts">
    import { writable, type Writable } from 'svelte/store';
    import Button from "$lib/Button/Button.svelte";

    export let active: Writable<number> = writable(0);
    export let max: number = 0;
    export let accent: string = 'bg-primary-500';
    export let text: string = 'text-black dark:text-white';
    export let variant: string = 'text';

    // Base Classes
    const cBaseStepper: string = 'flex justify-between items-center';
    const cbaseSteps: string = 'flex space-x-4 justify-center items-center';
    const cBaseNumbers: string = 'text-sm font-bold w-8 aspect-square flex justify-center items-center rounded-full cursor-pointer';
    const cBaseActive: string = 'text-white';

    // Functions
    function setActive(i: number): any { active.set(i); }
    function stepBack(): void { active.set($active - 1); }
    function stepNext(): void { active.set($active + 1); }

    // Reactive Classes
    $: classesStepper = `${cBaseStepper}`;
    $: classesSteps = `${cbaseSteps} ${text}`;
    $: classesNumbers = `${cBaseNumbers}`;
    $: classesActive = `${cBaseActive} ${accent}`;
</script>

<div class="stepper {classesStepper} {$$props.class}">

    <!-- Steps -->
    <nav class="numbers {classesSteps}">
        {#each Array(max) as _, i}
        <li class="step {classesNumbers} {$active === i ? classesActive : 'bg-surface-300 dark:bg-surface-700'}" on:click={()=>{setActive(i)}}>{i + 1}</li>
        {/each}
    </nav>

    <!-- Buttons -->
    <div class="flex items-center space-x-4">
        <Button {variant} on:click={stepBack} disabled={$active === 0}>Back</Button>
        {#if ($active+1) < max}
            <Button {variant} on:click={stepNext}>Next</Button>
        {:else}
            {#if $$slots.default}
            <slot />
            {:else}
            <Button {variant} disabled>Next</Button>
            {/if}
        {/if}
    </div>

</div>

<style lang="postcss">
    .active { @apply bg-primary-500; }
</style>