<script lang="ts">
    import { afterUpdate } from "svelte";

    export let checked: boolean = false;
    export let accent: string = 'bg-accent-500';
    export let size: string = 'lg';

    // Base Styles
    const cBaseLabel: string = 'slide-toggle flex items-center space-x-4';
    const cBaseTrack: string = 'track flex rounded-full transition duration-[200ms]';
    const cBaseThumb: string = 'thumb bg-surface-100 dark:bg-surface-200 w-[50%] h-full scale-[75%] rounded-full cursor-pointer transition duration-[200ms]';
   
    // Set track size
    let trackSize: string;
    switch(size){
        case('sm'): trackSize = 'w-12 h-6'; break;
        case('lg'): trackSize = 'w-20 h-10'; break;
        default:    trackSize = 'w-16 h-8';
    }

    // Set track accent
    let trackAccent: string;
    function setTrackAccent(): void {
        trackAccent = checked ? accent : 'dark:bg-surface-700 bg-surface-300 cursor-pointer';
    }

    // Set thumb position
    let thumbPos: string;
    function setThumbPosition(): void {
        thumbPos = checked ? 'translate-x-full' : '';
    }

    // On Init
    setTrackAccent();
    setThumbPosition();

    // On Prop Changes
    afterUpdate(() => {
        setTrackAccent();
        setThumbPosition();
    });

    // Reactive
    $: classesLabel = `${cBaseLabel}`;
    $: classesTrack = `${cBaseTrack} ${trackSize} ${trackAccent}`;
    $: classesThumb = `${cBaseThumb} ${thumbPos}`;
</script>

<label class="{classesLabel} {$$props.class}" class:opacity-30={$$props.disabled} data-testid="slide-toggle">

    <!-- Input (Hidden) -->
    <input
        type="checkbox" 
        class="hidden"
        bind:checked 
        on:click
        on:mouseover
        on:focus
        on:blur
        {...$$restProps}
        disabled={$$props.disabled}
    >

    <!-- Slider Track/Thumb -->
    <div class="{classesTrack}" class:cursor-not-allowed={$$props.disabled}>
        <div class="{classesThumb}" class:cursor-not-allowed={$$props.disabled}></div>
    </div>

    <!-- Label -->
    {#if $$slots}<slot/>{/if}

</label>
