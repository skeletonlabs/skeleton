<!-- https://css-tricks.com/building-progress-ring-quickly/ -->

<script lang="ts">
    import { afterUpdate } from "svelte";

    // Props
    export let value: number = undefined; // %
    export let suffix: string = '%';
    export let stroke: number = 20; // px

    // Props - Styles
    export let track: string = 'stroke-surface-300 dark:stroke-surface-700';
    export let meter: string = 'stroke-black dark:stroke-white';
    export let text: string = 'font-bold text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-2xl';

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
        setProgress(value);
        if (value === undefined) { setProgress(33); }
    });
</script>

<figure class="progress-radial relative" data-testid="progress-radial">
    <svg viewBox="0 0 {baseSize} {baseSize}" class="rounded-full" class:animate-spin={value === undefined}>
        <!-- Track -->
        <circle
            class="progress-track fill-transparent {track}"
            stroke-width={stroke}
            r={baseSize/2}
            cx="50%" cy="50%"
        />
        <!-- Meter -->
        <circle
            class="progress-meter fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%] {meter}"
            stroke-width={stroke}
            r={baseSize/2}
            cx="50%" cy="50%"
            style:stroke-dasharray="{circumference} {circumference}"
            style:stroke-dashoffset="{dashoffset}"
        />
    </svg>
    {#if value >= 0}
    <figcaption class="absolute top-0 left-0 z-50 w-full h-full flex justify-center items-center">
        <span class="{text}">{value}{suffix}</span>
    </figcaption>
    {/if}
</figure>

