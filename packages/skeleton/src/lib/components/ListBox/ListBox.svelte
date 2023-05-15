<script lang="ts">
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '../..';

	// Props
	/** Enable selection of multiple items. */
	export let multiple = false;

	// Props (styles)
	/** Provide class to set the vertical spacing style. */
	export let spacing: CssClasses = 'space-y-1';
	/** Provide classes to set the listbox box radius styles. */
	export let rounded: CssClasses = 'rounded-token';

	// Props (styles) - Item Only
	/** Provide classes to set the listbox item active background styles. */
	export let active: CssClasses = 'variant-filled';
	/** Provide classes to set the listbox item hover background styles. */
	export let hover: CssClasses = 'hover:variant-soft';
	/** Provide classes to set the listbox item padding styles. */
	export let padding: CssClasses = 'px-4 py-2';

	// Props (a11y)
	/** Provide the ARIA labelledby value. */
	export let labelledby = '';

	// Context
	setContext('multiple', multiple);
	setContext('rounded', rounded);
	setContext('active', active);
	setContext('hover', hover);
	setContext('padding', padding);

	// Classes
	const cBase = '';

	// Reactive
	$: classesBase = `${cBase} ${spacing} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="listbox {classesBase}" role="listbox" aria-labelledby={labelledby} data-testid="listbox">
	<slot />
</div>
