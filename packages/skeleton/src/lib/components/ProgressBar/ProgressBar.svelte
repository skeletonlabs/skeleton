<script lang="ts">
	// Types
	import type { CssClasses } from '../..';

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

	// Props (elements)
	/** Provide arbitrary classes to style the meter element. */
	export let meter: CssClasses = 'bg-surface-900-50-token';
	/** Provide arbitrary classes to style the track element. */
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
	$: classesIndeterminate = indeterminate ? 'animIndeterminate' : '';
	// Reactive Classes
	$: classesTrack = `${cTrack} ${height} ${rounded} ${track} ${$$props.class ?? ''}`;
	$: classesMeter = `${cMeter} ${rounded} ${classesIndeterminate} ${meter}`;
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
	<div class="progress-bar-meter {classesMeter} {classesMeter}" style:width="{indeterminate ? 100 : fillPercent}%" />
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
