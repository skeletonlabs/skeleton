<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';
	import { fly } from 'svelte/transition';

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
	export let duration = 200;

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
	let inputInvalid = false;

	function validate(): boolean {
		// Validate: custom validation
		if (validation !== undefined && !validation(inputValue)) {
			inputInvalid = true;
			return false;
		}
		// Validate: whitelist (if available)
		if (whitelist.length > 0 && !whitelist.includes(inputValue)) {
			inputInvalid = true;
			return false;
		}
		// Validate: value is unique
		if (allowDuplicates === false && value.includes(inputValue)) {
			inputInvalid = true;
			return false;
		}
		// All validation conditions met
		return true;
	}

	function addChip(event: Event): void {
		event.preventDefault();
		// Validate
		if (validate() === false) return;
		// Format: trim value
		inputValue = inputValue.trim();
		// Format: to lowercase (if enabled)
		inputValue = allowUpperCase ? inputValue : inputValue.toLowerCase();
		// Add to values array
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
	$: classesInvalid = inputInvalid ? invalid : '';
	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded} ${$$props.class ?? ''} ${classesInvalid}`;
	$: classesInterface = `${cInterface}`;
	$: classesChipList = `${cChipList}`;
	$: classesInputField = `${cInputField}`;

	// Prune restProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div class="input-chip {classesBase}" class:opacity-50={$$restProps.disabled}>
	<!-- Select (hidden) -->
	<select class="hidden" bind:value {name} multiple {...prunedRestProps()} />
	<!-- Interface -->
	<div class="input-chip-interface {classesInterface}">
		<!-- Input Field -->
		<form on:submit={addChip}>
			<input
				type="text"
				bind:value={inputValue}
				placeholder={$$restProps.placeholder ?? 'Enter values...'}
				class="input-chip-field {classesInputField}"
				on:input={() => {
					inputInvalid = false;
				}}
				on:input
				disabled={$$restProps.disabled}
			/>
		</form>
		<!-- Chip List -->
		{#if value.length}
			<div class="input-chip-list {classesChipList}">
				{#each value as c, i}
					<!-- prettier-ignore -->
					<span
						class="chip {chips}"
						on:click={(e) => { removeChip(e, i, c); }}
						on:click
						on:keypress
						on:keydown
						on:keyup
						transition:fly|local={{ duration, opacity: 0, y: 10 }}
					>
						<span>{c}</span>
						<span>✕</span>
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
