<script lang="ts">
	// Props
	/** Set the label text. */
	export let label = '';
	/**
	 * Specifies the amount completed. Indeterminate when `undefined`
	 * @type {number}
	 */
	export let value: number | undefined = undefined;
	/** Minimum amount the bar represents. */
	export let min = 0;
	/** Maximum amount the bar represents. */
	export let max = 100;
	/** Provide classes to set track height. */
	export let height = 'h-2';
	/** Provide classes to set rounded styles. */
	export let rounded = 'rounded-token';

	// Props (elements)
	/** Provide arbitrary classes to style the meter element. */
	export let meter = 'bg-secondary-500';
	/** Provide arbitrary classes to style the track element. */
	export let track = 'bg-surface-200-700-token';

	// Base Classes
	const cBase = 'w-full';
	const cBaseLabel = 'block text-sm mb-2';
	const cBaseTrack = `w-full overflow-hidden`;
	const cBaseMeterDeterminate = 'h-full';
	const cBaseMeterIndeterminate = 'h-full w-full';

	// Fill Percent
	$: fillPercent = value ? (100 * (value - min)) / (max - min) : 0;

	// Reactive Classes
	$: classesTrack = `${cBaseTrack} ${height} ${rounded} ${track} ${$$props.class ?? ''}`;
	$: classesMeter = `${rounded} ${meter}`;
</script>

<div
	class="progress-bar {cBase}"
	data-testid="progress-bar"
	role="progressbar"
	aria-label={label}
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max - min}
>
	<!-- Label -->
	{#if label}<label for="progress" class="progress-bar-label {cBaseLabel}">{label}</label>{/if}
	<!-- Track -->
	<div class="progress-bar-track {classesTrack}">
		<!-- Meter - Determinate / Indeterminate -->
		{#if value !== undefined && value >= 0}
			<div class="progress-bar-meter {cBaseMeterDeterminate} {classesMeter}" style:width="{fillPercent}%" />
		{:else}
			<div class="progress-bar-meter {cBaseMeterIndeterminate} {classesMeter} animIndeterminate" />
		{/if}
	</div>
</div>

<style lang="postcss">
	.animIndeterminate {
		transform-origin: 0% 50%;
		animation: animIndeterminate 2s infinite linear;
	}
	/* prettier-ignore */
	@keyframes animIndeterminate {
		0% { transform: translateX(0) scaleX(0); }
		40% { transform: translateX(0) scaleX(0.4); }
		100% { transform: translateX(100%) scaleX(0.5); }
	}
</style>
