<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher, getContext } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props
	/**
	 * The item's selection value.
	 * @type {any}
	 */
	export let value: any = undefined;

	// Props (A11y)
	/** Defines a semantic ARIA label. */
	export let label = '';

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let padding: string = getContext('padding');
	export let hover: string = getContext('hover');
	export let accent: string = getContext('accent');
	export let color: string = getContext('color');
	export let fill: string = getContext('fill');
	export let rounded: string = getContext('rounded');

	// Base Classes
	const cBase = 'font-bold text-base text-center cursor-pointer whitespace-nowrap';

	// A11y Input Handlers
	function onKeyDown(event: any): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			/** @event {{ event }} keydown - Fires when the component is in focus and key is pressed.  */
			dispatch('keydown', event);
			event.target.children[0].click();
		}
	}

	// Reactive Classes
	$: checked = value === $selected;
	$: classesSelected = checked ? `${accent} ${fill} ${color}` : `${hover}`;
	$: classesLabel = `${cBase} ${classesSelected} ${padding} ${rounded}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<div
	class="radio-item flex-auto"
	role="radio"
	aria-checked={checked}
	aria-label={label}
	{...prunedRestProps()}
	tabindex="0"
	data-testid="radio-item"
	on:click
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
>
	<label class="radio-item-label {classesLabel}">
		<input class="radio-item-input hidden" type="radio" {value} bind:group={$selected} />
		<slot />
	</label>
</div>
