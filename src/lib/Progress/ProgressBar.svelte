<script lang="ts">
	// Props
	export let label: string = '';
	export let value: number = undefined;
	export let max: number = 10;
	export let height: string = 'h-2';
	export let color: string = 'bg-accent-500';

	// Base Classes
	const cBaseWrapper: string = 'w-full';
	const cBaseLabel: string = 'block text-sm mb-2';
	const cBaseTrack: string = `w-full bg-surface-500/20 overflow-hidden rounded-full`;
	const cBaseMeterDeterminate: string = 'h-full rounded-full';
	const cBaseMeterIndeterminate: string = 'h-full w-full rounded-full';

	// Fill Percent
	$: fillPercent = (100 * value) / max;

	// Reactive Classes
	$: classesTrack = `${cBaseTrack} ${height} ${$$props.class}`;
</script>

<div class="progress-wrapper {cBaseWrapper}" data-testid="progress-wrapper" role="meter" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
	<!-- Label -->
	{#if label}<label for="progress" class="progress-label {cBaseLabel}">{label}</label>{/if}
	<!-- Track -->
	<div class="progress-track {classesTrack}">
		<!-- Meter - Determinate / Indeterminate -->
		{#if value >= 0}
			<div class="progress-meter {cBaseMeterDeterminate} {color}" style:width="{fillPercent}%" />
		{:else}
			<div class="progress-meter {cBaseMeterIndeterminate} {color} animIndeterminate" />
		{/if}
	</div>
</div>

<style lang="postcss">
	.animIndeterminate {
		transform-origin: 0% 50%;
		animation: animIndeterminate 2s infinite linear;
	}
	@keyframes animIndeterminate {
		0% {
			transform: translateX(0) scaleX(0);
		}
		40% {
			transform: translateX(0) scaleX(0.4);
		}
		100% {
			transform: translateX(100%) scaleX(0.5);
		}
	}
</style>
