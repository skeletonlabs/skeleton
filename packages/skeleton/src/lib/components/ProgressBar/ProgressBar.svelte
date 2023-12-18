<script lang="ts">
	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/**
	 * Specifies the amount completed. Indeterminate when `undefined`.
	 * @type {number | undefined}
	 */
	export let value: number | undefined = undefined;
	/** Minimum amount the bar represents. */
	export let min = 0;
	/** Maximum amount the bar represents. */
	export let max = 100;
	/** Provide classes to set track height. */
	export let height: CssClasses = 'h-2';
	/** Provide classes to set rounded styles. */
	export let rounded: CssClasses = 'rounded-token';
	/** Provide classes to set the meter transition styles. */
	export let transition: CssClasses = 'transition-[width]';
	/** Provide classes to replace the default animation styles. */
	export let animIndeterminate: CssClasses = 'anim-indeterminate';

	// Props (elements)
	/** Sets the base classes of the meter element. */
	export let meter: CssClasses = 'bg-surface-900-50-token';
	/** Sets the base classes of the track element. */
	export let track: CssClasses = 'bg-surface-200-700-token';

	// Props A11y
	/** Provide the ARIA labelledby value. */
	export let labelledby = '';

	// Base Classes
	const cTrack = 'w-full overflow-hidden';
	const cMeter = 'h-full';

	// Fill Percent
	$: fillPercent = value ? (100 * (value - min)) / (max - min) : 0;

	// Indeterminate State
	$: indeterminate = value === undefined || value < 0;
	$: classesIndeterminate = indeterminate ? animIndeterminate : '';
	// Reactive Classes
	$: classesTrack = `${cTrack} ${track} ${height} ${rounded} ${$$props.class ?? ''}`;
	$: classesMeter = `${cMeter} ${meter} ${rounded} ${classesIndeterminate} ${transition}`;
</script>

<!-- Track -->
<div
	class="progress-bar {classesTrack}"
	data-testid="progress-bar"
	role="progressbar"
	aria-labelledby={labelledby}
	aria-valuenow={value}
	aria-valuemin={min}
	aria-valuemax={max - min}
>
	<!-- Meter -->
	<div class="progress-bar-meter {classesMeter}" style:width="{indeterminate ? 100 : fillPercent}%" />
</div>

<style lang="postcss">
	.anim-indeterminate {
		transform-origin: 0% 50%;
		animation: anim-indeterminate 2s infinite linear;
	}
	/* prettier-ignore */
	@keyframes anim-indeterminate {
		0% { transform: translateX(0) scaleX(0); }
		40% { transform: translateX(0) scaleX(0.4); }
		100% { transform: translateX(100%) scaleX(0.5); }
	}
</style>
