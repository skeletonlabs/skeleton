<script lang="ts">
	import { setContext } from 'svelte';

	// Props
	/** Enable selection of multiple items. */
	export let multiple: boolean = false;

	// Props (styles)
	/** Provide classs to set the vertical spacing style. */
	export let spacing = `space-y-1`;
	/** Provide classes to set the listbox box radius styles. */
	export let rounded = 'rounded-token';

	// Props (styles) - Item Only
	/** Provide classes to set the listbox item active background styles. */
	export let active = 'variant-filled';
	/** Provide classes to set the listbox item hover background styles. */
	export let hover = 'hover:variant-soft';
	/** Provide classes to set the listbox item padding styles. */
	export let padding = 'px-4 py-2';

	// Props (a11y)
	export let labelledby: string = '';

	// Context
	setContext('multiple', multiple);
	setContext('rounded', rounded);
	setContext('active', active);
	setContext('hover', hover);
	setContext('padding', padding);

	// Classes
	const cBase: string = 'cursor-pointer -outline-offset-[3px]';

	// Reactive
	$: classesBase = `${cBase} ${spacing} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="listbox {classesBase}" role="listbox" aria-labelledby={labelledby} data-testid="listbox">
	<slot />
</div>
