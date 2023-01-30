<script lang="ts">
	import { setContext } from 'svelte';

	// Props (Group)
	/** Provide display classes. Set `flex` to stretch full width. */
	export let display = 'inline-flex';
	/** Provide classes to set the base background color. */
	export let background = 'bg-surface-200-700-token';
	/** Provide classes to set the border width */
	export let borderWidth = 'border-token';
	/** Provide classes to set the border color. */
	export let borderColor = 'border-surface-400-500-token';
	/** Provide classes horizontal spacing between items. */
	export let spacing = 'space-x-1';
	/** Provide classes to set the border radius. */
	export let rounded = 'rounded-token';

	// Props (Item)
	/** Provide classes to set the RadioItem padding. */
	export let padding = 'px-4 py-1';
	/** Provide classes to set the active item color. */
	export let active = 'variant-filled';
	/** Provide classes to set the hover style. */
	export let hover = 'hover:variant-soft';
	/** Provide classes to set the highlighted text color. */
	export let color = '';
	/** Provide classes to set the highlighted SVG fill color. */
	export let fill = '';

	// Props (a11y)
	export let labelledby = '';

	// Context
	setContext('rounded', rounded);
	setContext('padding', padding);
	setContext('active', active);
	setContext('hover', hover);
	setContext('color', color);
	setContext('fill', fill);

	// Classes
	const cBase = 'p-1';

	// Reactive
	$: classesBase = `${cBase} ${display} ${background} ${borderWidth} ${borderColor} ${spacing} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="radio-group {classesBase}" data-testid="radio-group" role="radiogroup" aria-labelledby={labelledby}>
	<slot />
</div>
