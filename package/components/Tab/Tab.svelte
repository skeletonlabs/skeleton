<script>// Slots
/**
 * @slot lead - Provides a leading position, which can be used for icons.
 */
import { createEventDispatcher, getContext } from 'svelte';
// Event Handler
const dispatch = createEventDispatcher();
// Context
export let selected = getContext('selected');
export let borderWidth = getContext('borderWidth');
export let borderColor = getContext('borderColor');
export let color = getContext('color');
export let fill = getContext('fill');
export let hover = getContext('hover');
export let rounded = getContext('rounded');
// Props
/**
 * The value of each tab.
 * @type {any}
 */
export let value = $selected.value;
// A11y
/** Defines a semantic label for the tab. */
export let label = 'tab';
// Base Classes
const cBase = 'font-bold list-none py-2.5 px-4 flex items-center space-x-2 cursor-pointer';
const cBorderColor = 'border-transparent';
const cBaseLabel = 'font-bold whitespace-nowrap';
// A11y Input Handlers
function onClickHandler(value) {
    /** @event {{ value }} click - Fires on tab click event.  */
    dispatch('click', value);
    // Update Selected
    selected.set(value);
}
function onKeyDown(event) {
    /** @event {{ event }} keydown - Fires on tab keydown event.  */
    dispatch('keydown', event);
    // Enter/Space to toggle element
    if (['Enter', 'Space'].includes(event.code)) {
        event.preventDefault();
        event.target.click();
    }
}
// Reactive Classes
$: isSelected = value == $selected;
$: classesSelected = isSelected ? `${borderWidth} ${borderColor} ${color} ${fill}` : `${borderWidth} ${cBorderColor}`;
$: classesBase = `${cBase} ${classesSelected} ${hover} ${rounded} ${$$props.class ?? ''}`;
$: classesLead = isSelected ? `${fill}` : 'fill-token';
$: classesLabel = `${cBaseLabel}`;
</script>

<li
	class="tab ${classesBase}"
	on:click={() => {
		onClickHandler(value);
	}}
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
	role="tab"
	tabindex="0"
	data-testid="tab"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<div class="tab-lead {classesLead}"><slot name="lead" /></div>{/if}
	<!-- Slot: Default -->
	{#if $$slots.default}<div class="tab-label {classesLabel}" aria-label={label}><slot /></div>{/if}
</li>
