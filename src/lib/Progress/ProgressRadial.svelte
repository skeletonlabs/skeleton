<!-- https://css-tricks.com/building-progress-ring-quickly/ -->

<script lang="ts">
    import { onMount } from "svelte";

    let value: number = 50;
    let size: number = 100;
    let stroke: number = 20;
    
    // Meter
    let meter: any;

    // TODO: convert to inline attributes

    onMount(() => {
        const radius = meter.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        // Set meter stroke
        meter.style.strokeDasharray = `${circumference} ${circumference}`;
        meter.style.strokeDashoffset = circumference;

        function setProgress(percent) {
            const offset = circumference - percent / 100 * circumference;
            meter.style.strokeDashoffset = offset;
        }
        setProgress(value);
    });
</script>

<svg class="progress-radial" width={size} height={size}>
    <!-- Track -->
	<circle
        class="progress-track stroke-surface-700 fill-transparent"
		stroke-width={stroke}
		r={size/2}
		cx="50%"
		cy="50%"
	/>
    <!-- meter -->
    <circle
        bind:this={meter}
		class="progress-meter stroke-black dark:stroke-white fill-transparent"
		stroke-width={stroke}
		r={size/2}
		cx="50%"
		cy="50%"
    />
</svg>

<style>
    .progress-radial { border-radius: 50%; }
    .progress-meter {
        transition: stroke-dashoffset 200ms;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
</style>
