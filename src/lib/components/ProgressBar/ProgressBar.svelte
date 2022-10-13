<script lang="ts">
	// Props
	export let label: string = '';
	export let value: number | undefined = undefined;
	export let max: number = 100;
	export let height: string = 'h-2';
	export let rounded: string = 'rounded-token';
	// Props (elements)
	export let meter: string = 'bg-accent-500';
	export let track: string = 'bg-surface-200-700-token';

	// Base Classes
	const cBaseWrapper: string = 'w-full';
	const cBaseLabel: string = 'block text-sm mb-2';
	const cBaseTrack: string = `w-full overflow-hidden`;
	const cBaseMeterDeterminate: string = 'h-full';
	const cBaseMeterIndeterminate: string = 'h-full w-full';

	// Fill Percent
	$: fillPercent = value ? (100 * value) / max : 0;

	// Reactive Classes
	$: classesTrack = `${cBaseTrack} ${height} ${rounded} ${track} ${$$props.class ?? ''}`;
	$: classesMeter = `${rounded} ${meter}`;
</script>

<div class="progress-wrapper {cBaseWrapper}" data-testid="progress-wrapper" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
	<!-- Label -->
	{#if label}<label for="progress" class="progress-label {cBaseLabel}">{label}</label>{/if}
	<!-- Track -->
	<div class="progress-track {classesTrack}">
		<!-- Meter - Determinate / Indeterminate -->
		{#if value !== undefined && value >= 0}
			<div class="progress-meter {cBaseMeterDeterminate} {classesMeter}" style:width="{fillPercent}%" />
		{:else}
			<div class="progress-meter {cBaseMeterIndeterminate} {classesMeter} animIndeterminate" />
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
