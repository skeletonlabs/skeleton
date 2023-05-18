<script lang="ts">
	// Slots
	/**
	 * @slot lead - Appears above the default label, useful for icons.
	 */

	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '../..';

	// Props
	/** Enables the active state styles when set true. */
	export let selected = false;

	// Props (region)
	/** Provide arbitrary classes to style the lead region. */
	export let regionLead: CssClasses = '';
	/** Provide arbitrary classes to style the label region. */
	export let regionLabel: CssClasses = '';

	// Context
	export let hover: CssClasses = getContext('hover');
	export let active: CssClasses = getContext('active');
	export let spacing: CssClasses = getContext('spacing');

	// Classes
	const cBase = 'unstyled';
	const cWrapper = 'w-full aspect-square flex flex-col justify-center items-stretch text-center space-y-1';
	const cLabel = 'font-bold text-xs';

	// State
	$: classActive = selected ? active : '';
	// Reactive
	$: classesBase = `${cBase}  ${$$props.class || ''}`;
	$: classesWrapper = `${cWrapper} ${hover} ${spacing} ${classActive}`;
	$: classesLead = `${regionLead}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<a
	class="app-rail-anchor {classesBase}"
	href={$$props.href}
	{...prunedRestProps()}
	on:click
	on:keydown
	on:keyup
	on:keypress
	data-testid="app-rail-anchor"
>
	<div class="app-rail-wrapper {classesWrapper}">
		{#if $$slots.lead}<div class="app-rail-lead {classesLead}"><slot name="lead" /></div>{/if}
		<div class="app-rail-label {classesLabel}"><slot /></div>
	</div>
</a>
