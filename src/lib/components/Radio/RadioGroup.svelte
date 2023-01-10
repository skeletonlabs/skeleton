<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Props
	/** Provide a writable store to maintain list selection.
	 * @type {writeable(any)}
	 */
	export let selected: Writable<any> = writable(undefined);
	/** Provide classes to set the display style. Use value `flex` to stretch the full width. */
	export let display = 'inline-flex';
	/** Provide classes to set the base background color. */
	export let background = 'bg-surface-200-700-token';
	//AUDIT can this be arbitrary or does it tie into the token system and have restricted values ?
	/** Provide classes to set the border width */
	export let borderWidth = 'border-token';
	/** Provide classes to set the border color. */
	export let borderColor = 'border-surface-300 dark:border-surface-600';
	/** Provide classes to set the RadioItem padding. */
	export let padding = 'px-4 py-2';
	/** Provide classes to set the hover style. */
	export let hover = 'bg-secondary-hover-token';
	/** Provide classes to set the highlighted accent color. */
	export let accent = 'bg-secondary-active-token !text-on-secondary-token';
	/** Provide classes to set the highlighted text color. */
	export let color = 'text-surface-50';
	/** Provide classes to set the highlighted SVG fill color. */
	export let fill = '';
	/** Provide classes to set the border radius. */
	export let rounded = 'rounded-token';

	// Props (a11y)
	/** Defines a semantic ARIA label. */
	export let label = 'radiogroup';

	// Context
	setContext('selected', selected);
	setContext('padding', padding);
	setContext('hover', hover);
	setContext('accent', accent);
	setContext('color', color);
	setContext('fill', fill);
	setContext('rounded', rounded);

	// Base Classes
	let cBaseGroup = `items-center p-1 overflow-hidden space-x-1 rounded-token`;

	// Reactive
	$: classesGroup = `${cBaseGroup} ${display} ${background} ${borderColor} ${borderWidth} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="radio-group {classesGroup}" data-testid="radio-group" role="radiogroup" aria-label={label}>
	<slot />
</div>
