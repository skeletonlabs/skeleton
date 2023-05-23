<script lang="ts">
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '../..';

	// Props (Group)
	/** Provide display classes. Set `flex` to stretch full width. */
	export let display: CssClasses = 'inline-flex';
	/** Provide classes to set the base background color. */
	export let background: CssClasses = 'bg-surface-200-700-token';
	/** Provide classes to set the border styles. */
	export let border: CssClasses = 'border-token border-surface-400-500-token';
	/** Provide classes horizontal spacing between items. */
	export let spacing: CssClasses = 'space-x-1';
	/** Provide classes to set the border radius. */
	export let rounded: CssClasses = 'rounded-token';

	// Props (Item)
	/** Provide classes to set the RadioItem padding. */
	export let padding: CssClasses = 'px-4 py-1';
	/** Provide classes to set the active item color. */
	export let active: CssClasses = 'variant-filled';
	/** Provide classes to set the hover style. */
	export let hover: CssClasses = 'hover:variant-soft';
	/** Provide classes to set the highlighted text color. */
	export let color: CssClasses = '';
	/** Provide classes to set the highlighted SVG fill color. */
	export let fill: CssClasses = '';

	// Props (a11y)
	/** Provide the ARIA labelledby value. */
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
	$: classesBase = `${cBase} ${display} ${background} ${border} ${spacing} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="radio-group {classesBase}" data-testid="radio-group" role="radiogroup" aria-labelledby={labelledby}>
	<slot />
</div>
