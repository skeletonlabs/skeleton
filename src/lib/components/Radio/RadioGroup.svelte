<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Props
	/** Provide a Svelte writable to store the selected state value.*/
	export let selected: Writable<any>;
	/** Provide classes to set the display style.
	 * @type {'inoine-flex' | 'flex' | 'block'}
	*/
	export let display: string = 'inline-flex';
	/** Provide classes to set the base background color.*/
	export let background: string = 'bg-surface-200-700-token';
	//AUDIT can this be arbitrary or does it tie into the token system and have restricted values ?
	/** Provide classes to set the border width*/
	export let borderWidth: string = 'border-token';
	/** Provide classes to set the border color.*/
	export let borderColor: string = 'border-surface-300 dark:border-surface-600';
	/** Provide classes to set the hover style.*/
	export let hover: string = 'bg-accent-hover-token';
	/** Provide classes to set the highlighted accent color.*/
	export let accent: string = 'bg-accent-active-token';
	/** Provide classes to set the highlighted text color.*/
	export let color: string = 'text-surface-50';
	/** Provide classes to set the highlighted SVG fill color.*/
	export let fill: string = '';
	/** Provide classes to set the border radius.*/
	export let rounded: string = 'rounded-token';

	// A11y
	/** Defines a semantic ARIA label.*/
	export let label: string = 'radiogroup';

	// Context
	setContext('selected', selected);
	setContext('hover', hover);
	setContext('accent', accent);
	setContext('color', color);
	setContext('fill', fill);
	setContext('rounded', rounded);

	// Base Classes
	let cBaseGroup: string = `items-center p-1 overflow-hidden space-x-1 rounded-token`;

	// Reactive
	$: classesGroup = `${cBaseGroup} ${display} ${background} ${borderColor} ${borderWidth} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="radio-group {classesGroup}" data-testid="radio-group" role="radiogroup" aria-label={label}>
	<slot />
</div>
