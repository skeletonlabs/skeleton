<script lang="ts">
	// Slots
	/**
	 * @slot lead - Appears above the default label, useful for icons.
	 */

	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/**
	 * Set the radio group binding value.
	 * @type {any}
	 * */
	export let group: any;
	/**
	 * Set a unique name value for the input.
	 * @type {string}
	 * */
	export let name: string;
	/**
	 * Set the input's value.
	 * @type {any}
	 * */
	export let value: any;
	/** Provide a hoverable title attribute for the tile. */
	export let title = '';

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
	const cBase = 'cursor-pointer';
	const cWrapper = 'w-full aspect-square flex flex-col justify-center items-stretch';
	const cInterface = 'text-center';
	const cLabel = 'font-bold text-xs';

	// Local
	let elemInput: HTMLElement;

	// State
	$: classActive = group === value ? active : '';
	// Reactive
	$: classesBase = `${cBase}  ${$$props.class || ''}`;
	$: classesWrapper = `${cWrapper} ${hover} ${classActive}`;
	$: classesInterface = `${cInterface} ${spacing}`;
	$: classesLead = `${regionLead}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<label class="app-rail-tile {classesBase}" data-testid="app-rail-tile" {title}>
	<!-- A11y attributes are not allowed on <label> -->
	<div class="app-rail-wrapper {classesWrapper}" on:keydown on:keyup on:keypress>
		<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
		<div class="h-0 w-0 overflow-hidden">
			<input bind:this={elemInput} type="radio" bind:group {name} {value} {...prunedRestProps()} tabindex="-1" on:click on:change />
		</div>
		<!-- Interface -->
		<div class="app-rail-interface {classesInterface}">
			{#if $$slots.lead}<div class="app-rail-lead {classesLead}"><slot name="lead" /></div>{/if}
			<div class="app-rail-label {classesLabel}"><slot /></div>
		</div>
	</div>
</label>
