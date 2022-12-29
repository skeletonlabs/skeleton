<script lang="ts">
	import { createEventDispatcher } from 'svelte/internal';

	// Event Dispatcher
	const dispatch = createEventDispatcher();

	/** Optionally provide an descriptive label. */
	export let label: string = '';
	/** Optionally provide an descriptive label. */
	export let placeholder: string = 'Enter Value...';
	/**
	 * Binds an array of values.
	 * @type {string[]}
	 */
	export let value: string[] = [];
	/**
	 * Provide a whitelist of accepted values.
	 * @type {string[]}
	 */
	export let whitelist: string[] = [];
	/** When enabled, will format entered values as lowercase. */
	export let lowercase: boolean = true;

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
			// Validate whitelist (if available)
			if (whitelist.length > 0 && !whitelist.includes(inputValue)) {
				inputInvalid = true;
				return;
			}
			// Validate value is unique
			if (!value.includes(inputValue)) {
				// Format lowercase (if enabled)
				inputValue = lowercase ? inputValue.toLowerCase() : inputValue;
				// Append value
				value = [...value, inputValue];
				// Clear input value
				inputValue = '';
				/** @event {{ event: KeyboardEvent }} add - When a chip is added. */
				dispatch('add', event);
			} else {
				inputInvalid = true;
				return;
			}
		}
	}

	function removeChip(chipIndex: number): void {
		/** @event {{ chipIndex: number }} remove - When a chip is removed. */
		dispatch('remove', chipIndex);
		value = value.filter((_, i) => i !== chipIndex);
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
		{placeholder}
		bind:value={inputValue}
		class="input-chip-field {cInput}"
		class:input-invalid={inputInvalid}
		on:keydown={onKeyDown}
	/>
</label>
