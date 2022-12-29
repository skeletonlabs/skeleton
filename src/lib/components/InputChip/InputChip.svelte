<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	// Event Dispatcher
	const dispatch = createEventDispatcher();

	/** Optionally provide an semantic label. */
	export let label: string = '';
	/** Optionally provide an input placeholder. */
	export let value: string[] = [];
	/**
	 * Provide a whitelist of accepted values.
	 * @type {string[]}
	 */
	export let whitelist: string[] = [];
	/** When enabled, will format entered values as lowercase. */
	export let lowercase: boolean = true;
	/**
	 * Provide a custom validation function.
	 * @type {function}
	 */
	export let validation: any = undefined;

	// Local
	let inputValue: string = '';
	let inputInvalid: boolean = false;

	// Classes
	// focus:border-secondary-500
	const cBase = 'unstyled border-token flex flex-wrap gap-2 items-center p-2 rounded';
	const cChip = 'chip-primary hover:chip-error';
	const cInput =
		'unstyled flex-auto border-transparent bg-transparent p-0 px-1 rounded text-base focus:ring-transparent focus:border-transparent min-h-[30px]';

	function onKeyDown(event: KeyboardEvent): void {
		inputInvalid = false;
		if (event.code === 'Enter' || event.keyCode === 13) {
			// Validate: custom validation
			if (validation !== undefined && !validation(inputValue)) {
				inputInvalid = true;
				return;
			}
			// Validate: whitelist (if available)
			if (whitelist.length > 0 && !whitelist.includes(inputValue)) {
				inputInvalid = true;
				return;
			}
			// Validate: value is unique
			if (value.includes(inputValue)) {
				inputInvalid = true;
				return;
			}
			// Format: trim value
			inputValue = inputValue.trim();
			// Format: to lowercase (if enabled)
			inputValue = lowercase ? inputValue.toLowerCase() : inputValue;
			// Append value
			value = [...value, inputValue];
			// Clear input value
			inputValue = '';
			/** @event {{ event: KeyboardEvent }} add - When a chip is added. */
			dispatch('add', event);
		}
	}

	function removeChip(chipIndex: number): void {
		value = value.filter((_, i) => i !== chipIndex);
		/** @event {{ chipIndex: number }} remove - When a chip is removed. */
		dispatch('remove', chipIndex);
	}

	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<label class="input-chip {cBase}">
	{#if label}<strong>{label}</strong>{/if}
	{#each value as chip, i}
		<!-- prettier-ignore -->
		<span class="chip {cChip}" on:click={() => {removeChip(i)}} on:keypress>
			<span>{chip}</span>
			<span>✕</span>
		</span>
	{/each}
	<input
		type="text"
		bind:value={inputValue}
		class="input-chip-field {cInput}"
		class:input-invalid={inputInvalid}
		on:keydown={onKeyDown}
		tabindex="0"
		{...prunedRestProps()}
	/>
</label>
