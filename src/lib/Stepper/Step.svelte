<!-- Reference: https://dribbble.com/shots/16221169-Figma-Material-Ui-components-Steppers-and-sliders -->

<script lang='ts'>
    import { getContext } from 'svelte';
    import Button from '$lib/Button/Button.svelte';

    // Props
    export let index: number;
    export let disabled: boolean = false;
    export let done: boolean = false;

    // Context
    export let dispatch: any = getContext('dispatch');
    export let active: any = getContext('active');
    export let length: number = getContext('length');
    export let accent: string = getContext('accent');
    export let background: string = getContext('background');

    // Base Classes
    const cStep: string = 'flex space-x-8';
    const cTimeline: string = 'text-center';
    const cTimelineCircle: string = 'font-bold w-8 aspect-square flex justify-center items-center rounded-full';
    const cTimelineBar: string = 'h-full w-1 mx-auto';
    const cInfo: string = 'space-y-4';
    const cNav: string = 'flex space-x-4';

    // Functionality
    function stepPrev(): void { active.set($active-1); }
    function stepNext(): void { active.set($active+1); }

    // On complete, dispatch event
    function onComplete() { dispatch('complete', {}); }

    // Set Active Background Color
    $: activeBg = index === $active ? `!text-white ${accent}` : background;

    // Reactive Classes
    $: classesCircle = `${cTimelineCircle} ${activeBg}`;
    $: classesBar = `${cTimelineBar} ${background}`;
</script>

<section class="step {cStep} {$$props.class}" data-testid="step">

    <!-- Timeline -->
    <div class="timeline {cTimeline}">
        <div class="timeline-circle {classesCircle}">{@html done ? '&check;' : index+1}</div>
        {#if (index+1) < length}<div class="timeline-bar {classesBar}"></div>{/if}
    </div>

    <!-- Information -->
    <div class="info {cInfo}">

        <!-- Header -->
        {#if $$slots.title || $$slots.subtitle}
        <header class="space-y-1">
            <!-- Slot: Title -->
            {#if $$slots.title}<div><slot name="title" /></div>{/if}
            <!-- Slot: Subtitle -->
            {#if $$slots.subtitle}<div><slot name="subtitle" /></div>{/if}
        </header>
        {/if}

        <!-- Slot: Content -->
        {#if $$slots.content && index === $active}<div><slot name="content" /></div>{/if}

        <!-- Navigation -->
        {#if index === $active}
        <nav class="navigation {cNav}">
            <Button variant="ring" on:click={stepPrev} disabled={index === 0}>Go Back</Button>
            {#if ($active+1) < length}
            <Button variant="filled" on:click={stepNext} {disabled}>Next Step &darr;</Button>
            {:else}
            <Button variant="filled-primary" on:click={onComplete} {disabled}>Complete</Button>
            {/if}
        </nav>
        {/if}

    </div>

</section>
