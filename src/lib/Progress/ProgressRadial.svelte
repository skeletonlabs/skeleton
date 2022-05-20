<!-- https://css-tricks.com/building-progress-ring-quickly/ -->
<!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor -->

<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props
    export let value: number = undefined; // %
    export let stroke: number = 20; // px
    export let track: string = 'stroke-surface-300 dark:stroke-surface-700';
    export let meter: string = 'stroke-black dark:stroke-white';
    export let color: string = 'fill-black dark:fill-white';
    export let fontsize: number = 56; // px

    // Base Classes
    const cBaseTrack: string = 'fill-transparent';
    const cBaseMeter: string = 'fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]';

    // Calculated Values
    const baseSize: number = 512; // px
    const radius: number = baseSize/2;
    let circumference: number = radius;
    let dashoffset: number;

    // Set Progress Amount
    function setProgress(percent) {
        circumference = radius * 2 * Math.PI;
        dashoffset = circumference - percent / 100 * circumference;
    }

    // On Init
    setProgress(0);
    
    // Reactive
    afterUpdate(() => {
        // If indeterminate set 25, else set the value
        setProgress(value === undefined ? 25 : value);
    });
</script>

<figure class="progress-radial relative overflow-hidden {$$props.class}" data-testid="progress-radial">

    <!-- Draw SVG -->
    <svg viewBox="0 0 {baseSize} {baseSize}" class="rounded-full" class:animate-spin={value === undefined}>

        <!-- Track -->
        <circle
            class="progress-track {cBaseTrack} {track}"
            stroke-width={stroke}
            r={baseSize/2}
            cx="50%" cy="50%"
        />

        <!-- Meter -->
        <circle
            class="progress-meter {cBaseMeter} {meter}"
            stroke-width={stroke}
            r={baseSize/2}
            cx="50%" cy="50%"
            style:stroke-dasharray="{circumference} {circumference}"
            style:stroke-dashoffset="{dashoffset}"
        />
        
        <!-- Center Text -->
        {#if value >= 0 && $$slots.default}
        <text
            x="50%" y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-weight="bold"
            font-size={fontsize}
            class="{color}"
        ><slot /></text>
        {/if}

    </svg>

</figure>

