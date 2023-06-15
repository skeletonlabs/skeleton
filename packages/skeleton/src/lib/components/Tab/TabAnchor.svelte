<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides a leading position, which can be used for icons.
	 */

	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/** Enables the active state styles when set true. */
	export let selected = false;

	// Props (a11y)
	/** Set the ARIA controls value to define which panel this tab controls. */
	export let controls = '';

	// Context
	/** Provide classes to style each tab's active styles. */
	export let active: CssClasses = getContext('active');
	/** Provide classes to style each tab's hover styles. */
	export let hover: CssClasses = getContext('hover');
	/** Provide classes to style each tab's flex styles. */
	export let flex: CssClasses = getContext('flex');
	/** Provide classes to style each tab's padding styles. */
	export let padding: CssClasses = getContext('padding');
	/** Provide classes to style each tab's box radius styles. */
	export let rounded: CssClasses = getContext('rounded');
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = getContext('spacing');

	// Classes
	const cBase = 'text-center cursor-pointer transition-colors duration-100';
	const cInterface = '';

	// State
	$: classesActive = selected ? active : hover;
	$: classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ''}`;
	$: classesInterface = `${cInterface} ${spacing}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<a
	class="tab-anchor {classesBase}"
	href={$$props.href}
	{...prunedRestProps()}
	aria-controls={controls}
	on:click
	on:keydown
	on:keyup
	on:keypress
	on:mouseover
	on:mouseleave
	on:focus
	on:blur
	data-testid="tab-anchor"
>
	<!-- Interface -->
	<div class="tab-interface {classesInterface}">
		{#if $$slots.lead}<div class="tab-lead"><slot name="lead" /></div>{/if}
		<div class="tab-label"><slot /></div>
	</div>
</a>
