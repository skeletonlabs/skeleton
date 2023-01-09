<script>import { createEventDispatcher } from 'svelte/internal';
// Event Dispatcher
const dispatch = createEventDispatcher();
// Props (settings)
/** Optionally provide an semantic label. */
export let label = '';
/** Optionally provide an input placeholder. */
export let value = [];
/**
 * Provide a whitelist of accepted values.
 * @type {string[]}
 */
export let whitelist = [];
/** When enabled, allows for uppercase values. */
export let allowUpperCase = false;
/** When enabled, allows for duplicate values. */
export let allowDuplicates = true;
/**
 * Provide a custom validation function.
 * @type {function}
 */
export let validation = () => true;
// Props (styles)
/** Provide chip styles. */
export let chip = `chip-primary`;
/** Provide chip hover styles. */
export let hover = 'hover:chip-error';
/** Set the input padding styles. */
export let padding = 'p-3';
/** Set the input border radius styles. */
export let rounded = 'rounded-container-token';
/** Set the input focus ring styles. */
export let ring = 'focus:ring-transparent';
// Local
let inputValue = '';
let inputValueValid = true;
// Classes
const cBase = 'unstyled border-token flex flex-wrap gap-2 items-center';
const cLabel = 'unstyled w-full md:w-auto mr-2';
const cInput = 'unstyled flex-auto border-transparent bg-transparent text-base px-1 py-0 focus:border-transparent min-h-[30px]';
function resetValiadtionClass() {
    inputValueValid = true;
}
function addChip(event) {
    event.preventDefault();
    // Validate: custom validation
    if (validation !== undefined && !validation(inputValue)) {
        inputValueValid = false;
        return;
    }
    // Validate: whitelist (if available)
    if (whitelist.length > 0 && !whitelist.includes(inputValue)) {
        inputValueValid = false;
        return;
    }
    // Validate: value is unique
    if (allowDuplicates === false && value.includes(inputValue)) {
        inputValueValid = false;
        return;
    }
    // Format: trim value
    inputValue = inputValue.trim();
    // Format: to lowercase (if enabled)
    inputValue = allowUpperCase ? inputValue : inputValue.toLowerCase();
    // Append value
    value = [...value, inputValue];
    // Clear input value
    inputValue = '';
    /** @event {{ event: KeyboardEvent }} add - When a chip is added. */
    dispatch('add', event);
}
function removeChip(chipIndex) {
    value = value.filter((_, i) => i !== chipIndex);
    /** @event {{ chipIndex: number }} remove - When a chip is removed. */
    dispatch('remove', chipIndex);
}
function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
}
// Reactive
$: classesBase = `${cBase} ${padding} ${rounded}`;
$: classesChip = `${chip} ${hover}`;
$: classesInput = `${cInput} ${ring}`;
</script>

<label class="input-chip {classesBase}">
	{#if label}<span class={cLabel}>{label}</span>{/if}
	{#each value as chip, i}
		<!-- prettier-ignore -->
		<span class="chip {classesChip}" on:click={() => {removeChip(i)}} on:keypress>
			<span>{chip}</span>
			<span>✕</span>
		</span>
	{/each}
	<form on:submit={addChip}>
		<input
			type="text"
			bind:value={inputValue}
			class="input-chip-field {classesInput}"
			class:input-invalid={!inputValueValid}
			tabindex="0"
			on:keydown={resetValiadtionClass}
			{...prunedRestProps()}
		/>
	</form>
</label>
