<script lang="ts">
	import { afterUpdate } from 'svelte';

	// Props
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
	export let value: number = 0;
	export let ticked: boolean = false;
	export let accent: string = 'accent-theme';
	// Props (a11y)
	export let id: string = crypto.randomUUID(); // unique id
	export let name: string = id;
	export let label: string = '';

	// Base Styles
	const cBase: string = 'space-y-2';
	const cBaseLabel: string = '';
	const cBaseContent: string = 'flex justify-center py-2';
	const cBaseInput: string = 'w-full h-2';

	// Local
	let tickmarks: any[];

	// Tickmarks - generate datalist options based on min/max values
	function setTicks(): void {
		if (ticked == false) return;
		tickmarks = Array.from({ length: max - min + 1 }, (_, i) => i + 1);
	}

	// Lifecycle
	afterUpdate(() => {
		setTicks();
	});

	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesInput = `${cBaseInput} ${accent}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<!-- prettier-ignore -->
<div
	class="range-slider {classesBase}"
	data-testid="range-slider"
>

	<!-- Slot: Default (label) -->
	{#if $$slots.default}<label class="range-label {cBaseLabel}" for={id}><slot /></label>{/if}

	<!-- Content -->
	<div class="range-content {cBaseContent}">
			
		<!-- Input -->
		<input
			type="range"
			{id}
			{name}
			class="range-input {classesInput}"
			list="tickmarks-{id}"
			aria-label={label}
			{min}
			{max}
			{step}
			bind:value
			on:click
			on:change
			on:blur
			{...prunedRestProps()}
		/>

		<!-- Tickmarks -->
		{#if ticked && tickmarks && tickmarks.length}
		<datalist id="tickmarks-{id}">
			{#each tickmarks as tm}
			<option value={tm} label={tm} />
			{/each}
		</datalist>
		{/if}

	</div>

	<!-- Slot: Trail -->
	{#if $$slots.trail}<div class="range-trail"><slot name="trail" /></div>{/if}
	
</div>
