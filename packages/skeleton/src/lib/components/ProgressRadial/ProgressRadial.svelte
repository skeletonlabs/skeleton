<!-- Reference: https://css-tricks.com/building-progress-ring-quickly/ -->
<script lang="ts">
	import { afterUpdate } from 'svelte';

	// Types
	import type { CssClasses } from '@skeletonlabs/skeleton';

	// Props
	/**
	 * Set the meter fill amount. Shows as indeterminate when set `undefined`.
	 * @type {number}
	 */
	export let value: number | undefined = undefined; // %
	/** Sets the base stroke width. Scales responsively. */
	export let stroke = 40; // px
	/** Sets the base font size. Scales responsively. */
	export let font = 56; // px

	// Props (styles)
	/** Provide classes to set the width. */
	export let width: CssClasses = 'w-36';
	/** Provide classes to set meter color. */
	export let meter: CssClasses = 'stroke-surface-900 dark:stroke-surface-50';
	/** Provide classes to set track color. */
	export let track: CssClasses = 'stroke-surface-500/30';
	/** Provide classes to set the SVG text fill color. */
	export let fill: CssClasses = 'fill-token';

	// Props A11y
	/** Provide the ARIA labelledby value. */
	export let labelledby = '';

	// Base Classes
	const cBase = 'progress-radial relative overflow-hidden';
	const cBaseTrack = 'fill-transparent';
	const cBaseMeter = 'fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]';

	// Calculated Values
	const baseSize = 512; // px
	const radius: number = baseSize / 2;
	let circumference: number = radius;
	let dashoffset: number;

	// Set Progress Amount
	function setProgress(percent: any) {
		circumference = radius * 2 * Math.PI;
		dashoffset = circumference - (percent / 100) * circumference;
	}

	// On Init
	setProgress(0);

	// Reactive
	afterUpdate(() => {
		// If indeterminate set 25, else set the value
		setProgress(value === undefined ? 25 : value);
	});

	// Reactive
	$: classesBase = `${cBase} ${width} ${$$props.class ?? ''}`;
</script>

<figure
	class="progress-radial {classesBase}"
	data-testid="progress-radial"
	role="meter"
	aria-labelledby={labelledby}
	aria-valuenow={value || 0}
	aria-valuetext={value ? `${value}%` : 'Indeterminate Spinner'}
	aria-valuemin={0}
	aria-valuemax={100}
>
	<!-- Draw SVG -->
	<svg viewBox="0 0 {baseSize} {baseSize}" class="rounded-full" class:animate-spin={value === undefined}>
		<!-- Track -->
		<circle class="progress-radial-track {cBaseTrack} {track}" stroke-width={stroke} r={baseSize / 2} cx="50%" cy="50%" />

		<!-- Meter -->
		<circle
			class="progress-radial-meter {cBaseMeter} {meter}"
			stroke-width={stroke}
			r={baseSize / 2}
			cx="50%"
			cy="50%"
			style:stroke-dasharray="{circumference}
			{circumference}"
			style:stroke-dashoffset={dashoffset}
		/>

		<!-- Center Text -->
		{#if value != undefined && value >= 0 && $$slots.default}
			<text
				x="50%"
				y="50%"
				text-anchor="middle"
				dominant-baseline="middle"
				font-weight="bold"
				font-size={font}
				class="progress-radial-text {fill}"><slot /></text
			>
		{/if}
	</svg>
</figure>
