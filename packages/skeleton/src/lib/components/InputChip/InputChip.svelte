<script lang="ts" context="module">
	import { fly, scale } from 'svelte/transition';
	import { type Transition, type TransitionParams, prefersReducedMotionStore } from '../../index.js';
	import { dynamicTransition } from '../../internal/transitions.js';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type FlyTransition = typeof fly;
	type ListTransitionIn = Transition;
	type ListTransitionOut = Transition;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type ScaleTransition = typeof scale;
	type ChipTransitionIn = Transition;
	type ChipTransitionOut = Transition;
</script>

<script
	lang="ts"
	generics="ListTransitionIn extends Transition = FlyTransition, ListTransitionOut extends Transition = FlyTransition, ChipTransitionIn extends Transition = ScaleTransition, ChipTransitionOut extends Transition = ScaleTransition"
>
	import { createEventDispatcher, onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	// Types
	import type { CssClasses, SvelteEvent } from '../../index.js';

	// Event Dispatcher
	type InputChipEvent = {
		add: { event: SubmitEvent; chipIndex: number; chipValue: string };
		remove: { event: MouseEvent; chipIndex: number; chipValue: string };
		addManually: { chipIndex: number; chipValue: string };
		removeManually: { chipValue: string };
		invalid: { event: SubmitEvent; input: string };
		invalidManually: { input: string };
	};
	const dispatch = createEventDispatcher<InputChipEvent>();

	// Props
	/** Bind the input value. */
	export let input = '';
	/**
	 * Set a unique select input name.
	 * @type {string}
	 */
	export let name: string;
	/** An array of values. */
	export let value: any[] = [];
	/**
	 * Provide a whitelist of accepted values.
	 * @type {string[]}
	 */
	export let whitelist: string[] = [];
	/** Maximum number of chips. Set -1 to disable. */
	export let max = -1;
	/** Set the minimum character length. */
	export let minlength = -1;
	/** Set the maximum character length. */
	export let maxlength = -1;
	/** When enabled, allows for uppercase values. */
	export let allowUpperCase = false;
	/** When enabled, allows for duplicate values. */
	export let allowDuplicates = false;
	/**
	 * Provide a custom validator function.
	 * @type {function}
	 */
	export let validation: (...args: any[]) => boolean = () => true;

	/** The duration of the flip (first, last, invert, play) animation. */
	export let duration = 150;
	/** Set the required state for this input field. */
	export let required = false;

	// Props (styles)
	/** Provide classes or a variant to style the chips. */
	export let chips: CssClasses = 'variant-filled';
	/** Provide classes used to indicate invalid state. */
	export let invalid: CssClasses = 'input-error';
	/** Provide classes to set padding styles. */
	export let padding: CssClasses = 'p-2';
	/** Provide classes to set border radius styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (regions)
	/** Provide arbitrary classes to style the chip wrapper region. */
	export let regionChipWrapper: CssClasses = '';
	/** Provide arbitrary classes to style the chip list region. */
	export let regionChipList: CssClasses = '';
	/** Provide arbitrary classes to style the input field region. */
	export let regionInput: CssClasses = '';

	// Props (A11y)
	/** Provide the ARIA label for the select input. */
	export let label = 'Chips select';

	// Props (transition)
	/**
	 * Enable/Disable transitions
	 * @type {boolean}
	 */
	export let transitions = !$prefersReducedMotionStore;
	/**
	 * Provide the transition used in list on entry.
	 * @type {ListTransitionIn}
	 */
	export let listTransitionIn: ListTransitionIn = fly as ListTransitionIn;
	/**
	 * Transition params provided to `ListTransitionIn`.
	 * @type {TransitionParams}
	 */
	export let listTransitionInParams: TransitionParams<ListTransitionIn> = { duration: 150, opacity: 0, y: -20 };
	/**
	 * Provide the transition used in list on exit.
	 * @type {ListTransitionOut}
	 */
	export let listTransitionOut: ListTransitionOut = fly as ListTransitionOut;
	/**
	 * Transition params provided to `ListTransitionOut`.
	 * @type {TransitionParams}
	 */
	export let listTransitionOutParams: TransitionParams<ListTransitionOut> = { duration: 150, opacity: 0, y: -20 };
	/**
	 * Provide the transition used in chip on entry.
	 * @type {ChipTransitionIn}
	 */
	export let chipTransitionIn: ChipTransitionIn = scale as ChipTransitionIn;
	/**
	 * Transition params provided to `ChipTransitionIn`.
	 * @type {TransitionParams}
	 */
	export let chipTransitionInParams: TransitionParams<ChipTransitionIn> = { duration: 150, opacity: 0 };
	/**
	 * Provide the transition used in chip on exit.
	 * @type {ChipTransitionOut}
	 */
	export let chipTransitionOut: ChipTransitionOut = scale as ChipTransitionOut;
	/**
	 * Transition params provided to `ChipTransitionOut`.
	 * @type {TransitionParams}
	 */
	export let chipTransitionOutParams: TransitionParams<ChipTransitionOut> = { duration: 150, opacity: 0 };

	// Classes
	const cBase = 'textarea cursor-pointer';
	const cChipWrapper = 'space-y-4';
	const cChipList = 'flex flex-wrap gap-2';
	const cInputField = 'unstyled bg-transparent border-0 !ring-0 p-0 w-full';

	// Local
	let inputValid = true;
	let chipValues: Array<{ val: (typeof value)[0]; id: number }> =
		value?.map((val) => {
			return { val: val, id: Math.random() };
		}) || [];

	// Reset Form
	function resetFormHandler() {
		value = [];
	}
	let selectElement: HTMLSelectElement;
	onMount(() => {
		// Verify external form is present
		if (!selectElement.form) return;

		const externalForm = selectElement.form as HTMLFormElement;

		// Attach reset event listener to external form
		externalForm.addEventListener('reset', resetFormHandler);

		// Return onDestroy handler that will remove the event listener from the external form
		return () => {
			externalForm.removeEventListener('reset', resetFormHandler);
		};
	});

	function onInputHandler(): void {
		inputValid = true;
	}

	function validateCustom(chip: string) {
		return validation === undefined || validation(chip);
	}

	function validateCount() {
		return max === -1 || value.length < max;
	}

	function validateLength(chip: string) {
		return (minlength === -1 || chip.length >= minlength) && (maxlength === -1 || chip.length <= maxlength);
	}

	function validateWhiteList(chip: string) {
		return whitelist.length === 0 || whitelist.includes(chip);
	}

	function validateDuplicates(chip: string) {
		return allowDuplicates || !value.includes(chip);
	}

	function validate(chip: string = ''): boolean {
		if (!chip && !input) return false;
		// Format: trim value
		chip = chip !== '' ? chip.trim() : input.trim();
		return validateCustom(chip) && validateCount() && validateLength(chip) && validateWhiteList(chip) && validateDuplicates(chip);
	}

	function addChipCommon(chip: string) {
		// Format: to lowercase (if enabled)
		chip = allowUpperCase ? chip : chip.toLowerCase();
		// Append value to array
		value.push(chip);
		value = value;
		chipValues.push({ val: chip, id: Math.random() });
		chipValues = chipValues;
	}

	function removeChipCommon(chip: string) {
		let chipIndex = value.indexOf(chip);
		// Remove value from array
		value.splice(chipIndex, 1);
		value = value;
		chipValues.splice(chipIndex, 1);
		chipValues = chipValues;
	}

	function addChipInternally(event: SvelteEvent<SubmitEvent, HTMLFormElement>): void {
		event.preventDefault();
		// Validate
		inputValid = validate();
		// When the onInvalid hook is present
		if (inputValid === false) {
			/** @event {{ event: Event, input: any  }} invalid - Fires when the input value is invalid. */
			dispatch('invalid', { event, input });
			return;
		}
		addChipCommon(input);
		/** @event {{ event: Event, chipIndex: number, chipValue: string }} add - Fires when a chip is added. */
		dispatch('add', { event, chipIndex: value.length - 1, chipValue: input });
		// Clear input value
		input = '';
	}

	function removeChipInternally(event: SvelteEvent<MouseEvent, HTMLButtonElement>, chipIndex: number, chipValue: string): void {
		if ($$restProps.disabled) return;
		removeChipCommon(chipValue);
		/** @event {{ event: Event, chipIndex: number, chipValue: string }} remove - Fires when a chip is removed. */
		dispatch('remove', { event, chipIndex, chipValue });
	}

	// Export functions
	export function addChip(chip: string) {
		// Validate
		inputValid = validate(chip);
		// When the onInvalid hook is present
		if (inputValid === false) {
			/** @event {{ input: string  }} invalidManually - Fires when the manually added value is invalid. */
			dispatch('invalidManually', { input: chip });
			return;
		}
		addChipCommon(chip);
		/** @event {{ chipIndex: number, chipValue: string }} addManually - Fires when a chip is added manually. */
		dispatch('addManually', { chipIndex: value.length - 1, chipValue: chip });
	}

	export function removeChip(chip: string) {
		if ($$restProps.disabled) return;
		removeChipCommon(chip);
		/** @event {{ chipValue: string }} removeManually - Fires when a chip is removed manually. */
		dispatch('removeManually', { chipValue: chip });
	}

	// State
	$: classesInvalid = inputValid === false ? invalid : '';
	// Reactive
	$: classesBase = `${cBase} ${padding} ${rounded} ${$$props.class ?? ''} ${classesInvalid}`;
	$: classesChipWrapper = `${cChipWrapper} ${regionChipWrapper}`;
	$: classesChipList = `${cChipList} ${regionChipList}`;
	$: classesInput = `${cInputField} ${regionInput}`;
	$: chipValues =
		value?.map((val, i) => {
			if (chipValues[i]?.val === val) return chipValues[i];
			return { id: Math.random(), val: val };
		}) || [];
</script>

<div class="input-chip {classesBase}" class:opacity-50={$$restProps.disabled}>
	<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
	<div class="h-0 overflow-hidden">
		<select bind:this={selectElement} bind:value {name} multiple {required} aria-label={label} tabindex="-1">
			<!-- NOTE: options are required! -->
			{#each value as option}<option value={option}>{option}</option>{/each}
		</select>
	</div>
	<!-- Chip Wrapper -->
	<div class="input-chip-wrapper {classesChipWrapper}">
		<!-- Input Field -->
		<form on:submit={addChipInternally}>
			<input
				type="text"
				bind:value={input}
				placeholder={$$restProps.placeholder ?? 'Enter values...'}
				class="input-chip-field {classesInput}"
				on:input={onInputHandler}
				on:input
				on:focus
				on:blur
				disabled={$$restProps.disabled}
			/>
		</form>
		<!-- Chip List -->
		{#if chipValues.length}
			<div
				class="input-chip-list {classesChipList}"
				in:dynamicTransition|local={{ transition: listTransitionIn, params: listTransitionInParams, enabled: transitions }}
				out:dynamicTransition|local={{ transition: listTransitionOut, params: listTransitionOutParams, enabled: transitions }}
			>
				{#each chipValues as { id, val }, i (id)}
					<!-- Wrapping div required for FLIP animation -->
					<div animate:flip={{ duration }}>
						<button
							type="button"
							class="chip {chips}"
							on:click={(e) => removeChipInternally(e, i, val)}
							on:click
							on:keypress
							on:keydown
							on:keyup
							in:dynamicTransition|local={{ transition: chipTransitionIn, params: chipTransitionInParams, enabled: transitions }}
							out:dynamicTransition|local={{ transition: chipTransitionOut, params: chipTransitionOutParams, enabled: transitions }}
						>
							<span>{val}</span>
							<span>✕</span>
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
