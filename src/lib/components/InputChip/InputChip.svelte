<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	// Event Dispatcher
	const dispatch = createEventDispatcher();

	// Props
	/** Set a unique select input name. */
	export let name: string;
	/** An array of values. */
	export let value: any[] = [];
	/**
	 * Provide a whitelist of accepted values.
	 * @type {string[]}
	 */
	export let whitelist: string[] = [];
	/** Maximum number of chips. Set -1 to disable. */
	export let max: number = -1;
	/** When enabled, allows for uppercase values. */
	export let allowUpperCase: boolean = false;
	/** When enabled, allows for duplicate values. */
	export let allowDuplicates: boolean = false;
	/**
	 * Provide a custom validation function.
	 * @type {function}
	 */
	export let validation: (...args: any[]) => boolean = () => true;
	/** The duration of the animated fly effect. */
	export let duration = 150;
	/** Set the required state for this input field. */
	export let required: boolean = false;

	// Props (styles)
	/** Provide classes or a variant to style the chips. */
	export let chips: string = 'variant-filled';
	/** Provide classes used to indicate invalid state. */
	export let invalid: string = 'input-error';
	/** Provide classes to set padding styles. */
	export let padding: string = 'p-2';
	/** Provide classes to set border radius styles. */
	export let rounded: string = 'rounded-container-token';

	// Classes
	const cBase = 'input-cell cursor-pointer';
	const cInterface = 'space-y-4';
	const cChipList = 'flex flex-wrap gap-2';
	const cInputField = 'unstyled bg-transparent border-0 !ring-0 p-0 w-full';

	// Local
	let inputValue = '';
	let inputValid = true;

	function onInputHandler(): void {
		inputValid = true;
	}

	function validate(): boolean {
		if (!inputValue) return false;
		// Custom validation
		if (validation !== undefined && !validation(inputValue)) return false;
		// Maxiumum
		if (max !== -1 && value.length >= max) return false;
		// Whitelist (if available)
		if (whitelist.length > 0 && !whitelist.includes(inputValue)) return false;
		// Value is unique
		if (allowDuplicates === false && value.includes(inputValue)) return false;
		// State is valid
		return true;
	}

	function addChip(event: Event): void {
		event.preventDefault();
		// Validate
		inputValid = validate();
		if (inputValid === false) return;
		// Format: trim value
		inputValue = inputValue.trim();
		// Format: to lowercase (if enabled)
		inputValue = allowUpperCase ? inputValue : inputValue.toLowerCase();
		// Append value to array
		value = [...value, inputValue];
		/** @event {{ event: Event, chipIndex: number, chipValue: string }} add - Fires when a chip is added. */
		dispatch('add', { event, chipIndex: value.length - 1, chipValue: inputValue });
		// Clear input value
		inputValue = '';
	}

	function removeChip(event: Event, chipIndex: number, chipValue: string): void {
		if ($$restProps.disabled) return;
		value = value.filter((_, i) => i !== chipIndex);
		/** @event {{ event: Event, chipIndex: number, chipValue: string }} remove - Fires when a chip is removed. */
		dispatch('remove', { event, chipIndex, chipValue });
	}

	// State
	$: classesInvalid = inputValid === false ? invalid : '';
	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded} ${$$props.class ?? ''} ${classesInvalid}`;
	$: classesInterface = `${cInterface}`;
	$: classesChipList = `${cChipList}`;
	$: classesInputField = `${cInputField}`;
</script>

<div class="input-chip {classesBase}" class:opacity-50={$$restProps.disabled}>
	<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
	<div class="h-0 overflow-hidden">
		<select bind:value {name} multiple {required}>
			<!-- NOTE: options are required! -->
			{#each value as option}<option value={option}>{option}</option>{/each}
		</select>
	</div>
	<!-- Interface -->
	<div class="input-chip-interface {classesInterface}">
		<!-- Input Field -->
		<form on:submit={addChip}>
			<input
				type="text"
				bind:value={inputValue}
				placeholder={$$restProps.placeholder ?? 'Enter values...'}
				class="input-chip-field {classesInputField}"
				on:input={onInputHandler}
				on:input
				disabled={$$restProps.disabled}
			/>
		</form>
		<!-- Chip List -->
		{#if value.length}
			<div class="input-chip-list {classesChipList}" transition:fly|local={{ duration, opacity: 0, y: -20 }}>
				{#each value as c, i (c)}
					<!-- Wrapping div required for FLIP animation -->
					<div animate:flip={{ duration }}>
						<span
							class="chip {chips}"
							on:click={(e) => {
								removeChip(e, i, c);
							}}
							on:click
							on:keypress
							on:keydown
							on:keyup
							transition:scale|local={{ duration, opacity: 0 }}
						>
							<span>{c}</span>
							<span>✕</span>
						</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
