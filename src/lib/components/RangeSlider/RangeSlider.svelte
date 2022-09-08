<script lang="ts">
	// Props
	export let id: string = (Math.random() * 10e15).toString(16); // unique id
	export let name: string = id;
	// Props: Values
	export let min: number = 0;
	export let max: number = 10;
	export let step: number = 1;
	export let value: number = 0;
	// Props: Options
	export let label: string = '';
	export let ticked: boolean = false;
	export let accent: string = 'accent-primary-500';

	// Base Styles
	const cBaseLabel: string = 'm-0';
	const cBaseContent: string = 'flex justify-center space-x-4';
	const cBaseInput: string = 'w-full h-2';
	const cBaseValue: string = 'flex-none min-w-[50px] text-center';

	// Tickmarks - generate datalist options based on min/max values
	let tickmarks: any[];
	if (ticked) {
		tickmarks = Array.from({ length: max - min + 1 }, (v, i) => i);
	}

	// A11y Input Handler
	function onKeyDown(event: any): void {
		// Arrow Keys
		const hotKeys: string[] = ['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'Home', 'End'];
		if (hotKeys.includes(event.code)) {
			event.preventDefault();
			// prettier-ignore
			switch (event.code) {
				case 'ArrowRight': valueIncrease(); break;
				case 'ArrowUp': valueIncrease(); break;
				case 'ArrowLeft': valueDecrease(); break;
				case 'ArrowDown': valueDecrease(); break;
				case 'Home': valueMin(); break;
				case 'End': valueMax(); break;
				default: break;
			}
		}
	}
	function valueIncrease(): void {
		if (value + step <= max) {
			value += step;
		}
	}
	function valueDecrease(): void {
		if (value - step >= min) {
			value -= step;
		}
	}
	function valueMin(): void {
		value = min;
	}
	function valueMax(): void {
		value = max;
	}

	// Reactive Classes
	$: classesInput = `${cBaseInput} ${accent}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div class="range-slider {$$props.class || ''}" data-testid="range-slider" on:keydown={onKeyDown} role="slider" aria-label={label} aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}>
	<!-- Label -->
	<label class="range-label {cBaseLabel}" for={id}>{label}</label>

	<!-- Content -->
	<div class="range-content {cBaseContent}">
		<!-- Input -->
		<div class="flex-1">
			<input type="range" {id} {name} class="range-input {classesInput}" list="tickmarks-{id}" {min} {max} {step} bind:value on:click on:change on:blur {...prunedRestProps()} />

			<!-- Tickmarks -->
			{#if ticked && tickmarks.length}
				<datalist id="tickmarks-{id}">
					{#each tickmarks as tm}
						<option value={tm} label={tm} />
					{/each}
				</datalist>
			{/if}
		</div>

		<!-- Value -->
		<span class="range-value {cBaseValue}">{value}</span>
	</div>
</div>
