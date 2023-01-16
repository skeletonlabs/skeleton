<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import type { CSS } from '$lib';

	// Props
	/** Provide a writable store to maintain list selection.
	 * @type {writeable(any)}
	 */
	export let selected: Writable<any> = writable(undefined);
	/** Provide classes to set the display style. Use value `flex` to stretch the full width. */
	export let display:CSS = 'inline-flex';
	/** Provide classes to set the base background color. */
	export let background:CSS = 'bg-surface-200-700-token';
	//AUDIT can this be arbitrary or does it tie into the token system and have restricted values ?
	/** Provide classes to set the border width */
	export let borderWidth:CSS = 'border-token';
	/** Provide classes to set the border color. */
	export let borderColor:CSS = 'border-surface-300 dark:border-surface-600';
	/** Provide classes to set the RadioItem padding. */
	export let padding:CSS = 'px-4 py-2';
	/** Provide classes to set the hover style. */
	export let hover:CSS = 'bg-secondary-hover-token';
	/** Provide classes to set the highlighted accent color. */
	export let accent:CSS = 'bg-secondary-active-token !text-on-secondary-token';
	/** Provide classes to set the highlighted text color. */
	export let color:CSS = 'text-surface-50';
	/** Provide classes to set the highlighted SVG fill color. */
	export let fill:CSS = '';
	/** Provide classes to set the border radius. */
	export let rounded:CSS = 'rounded-token';

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
