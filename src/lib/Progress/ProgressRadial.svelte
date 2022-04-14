<!-- https://css-tricks.com/building-progress-ring-quickly/ -->

<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props
    export let value: number = undefined; // %
    export let stroke: number = 20; // px
    // Styling
    export let track: string = 'stroke-surface-300 dark:stroke-surface-700';
    export let meter: string = 'stroke-black dark:stroke-white';
    export let color: string = 'fill-black dark:fill-white';
    export let fontsize: number = 56; // px

    // Base Classes
    const cTrack: string = 'fill-transparent';
    const cMeter: string = 'fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]';

    // Calculated Values
    const baseSize: number = 512; // px
    const radius: number = baseSize/2;
    let circumference: number = radius;
    let dashoffset: number;

    // Set
    function setProgress(percent) {
        circumference = radius * 2 * Math.PI;
        dashoffset = circumference - percent / 100 * circumference;
    }

    // On Init
    setProgress(0);
    
    // Reactive
    afterUpdate(() => {
        // In indeterminate set 33, else set the value
        setProgress(value === undefined ? 33 : value);
    });
</script>

<figure class="progress-radial relative {$$props.class}" data-testid="progress-radial">
    <svg viewBox="0 0 {baseSize} {baseSize}" class="rounded-full" class:animate-spin={value === undefined}>
        <!-- Track -->
        <circle
            class="progress-track {cTrack} {track}"
            stroke-width={stroke}
            r={baseSize/2}
            cx="50%" cy="50%"
        />
        <!-- Meter -->
        <circle
            class="progress-meter {cMeter} {meter}"
            stroke-width={stroke}
            r={baseSize/2}
            cx="50%" cy="50%"
            style:stroke-dasharray="{circumference} {circumference}"
            style:stroke-dashoffset="{dashoffset}"
        />
        <!-- Text -->
        <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor -->
        {#if $$slots.default}
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
    <!-- {#if $$slots.default}
    <figcaption class="{cFigCaption}"><slot /></figcaption>
    {/if} -->
</figure>

