<script>// Slots
/**
 * @slot lead - Positioned on the left of each row item.
 * @slot trail - Positioned on the right of each row item.
 */
import { createEventDispatcher, getContext } from 'svelte';
// Props (a11y)
/** Define a unique and semantic identifier for the item. */
export let id = '';
// Event Handler
const dispatch = createEventDispatcher();
// Context
export let selected = getContext('selected');
export let accent = getContext('accent');
export let padding = getContext('padding');
export let rounded = getContext('rounded');
export let hover = getContext('hover');
// Base Classes
const cBase = 'flex items-center space-x-4 whitespace-nowrap cursor-pointer -outline-offset-[3px]';
// Local
let elemItem;
// Input Handler
function onClickHandler(event) {
    if (!$$props.value)
        return;
    typeof $selected === 'object' ? handleMultiSelect() : handleSingleSelect();
    /** @event {{ event }} click - Fires when the component is clicked.  */
    dispatch('click', event);
}
// Selection Handlers
function handleSingleSelect() {
    selected.set($$props.value);
}
function handleMultiSelect() {
    const v = $$props.value;
    const local = $selected;
    // Add
    if (local.includes(v)) {
        local.splice(local.indexOf(v), 1);
        selected.set(local);
    }
    // Remove
    else {
        selected.set([...local, v]);
    }
}
// A11y Key Down Handler
function onKeyDown(event) {
    /** @event {{ event: KeyboardEvent }} keydown - Fires when the component is focused and key is pressed.  */
    dispatch('keydown', event);
    if (['Enter', 'Space'].includes(event.code)) {
        event.preventDefault();
        elemItem.click();
    }
}
// Reactive
$: selectionMatch = () => {
    if ($selected && $$props.value) {
        return typeof $selected === 'object' ? $selected.includes($$props.value) : $selected === $$props.value;
    }
    return false;
};
$: isSelected = selectionMatch() ? true : false;
$: classesHighlight = isSelected ? `${accent}` : `${hover}`;
$: classesBase = `${cBase} ${padding} ${rounded} ${classesHighlight} ${$$props.class ?? ''}`;
</script>

<!-- prettier-ignore -->
<li
	bind:this={elemItem}
	class="listbox-item {classesBase}"
	{id}
	on:click={onClickHandler}
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
	role="option"
	aria-selected={isSelected}
	tabindex="0"
	data-testid="listbox-item"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<span class="listbox-item-lead"><slot name="lead" /></span>{/if}
	<!-- Slot: Default -->
	<div class="listbox-item-content flex-1"><slot /></div>
	<!-- Slot: Trail -->
	{#if $$slots.trail}<span class="listbox-item-trail"><slot name="trail" /></span>{/if}
</li>
