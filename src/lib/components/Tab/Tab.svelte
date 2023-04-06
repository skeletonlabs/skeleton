<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides a leading position, which can be used for icons.
	 */

	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '$lib';

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

	// Props (a11y)
	/** Set the ARIA controls value to define which panel this tab controls. */
	export let controls: string = '';

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

	// Local
	let elemInput: HTMLElement;

	// A11y Key Down Handler
	function onKeyDown(event: KeyboardEvent): void {
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			elemInput.click();
		}
	}

	// Reactive
	$: selected = value === group;
	$: classesActive = selected ? active : hover;
	$: classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ''}`;
	$: classesInterface = `${cInterface} ${spacing}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<label>
	<!-- A11y attributes are not allowed on <label> -->
	<div
		class="tab {classesBase}"
		data-testid="tab"
		role="tab"
		aria-controls={controls}
		aria-selected={selected}
		tabindex="0"
		on:keydown={onKeyDown}
		on:keydown
		on:keyup
		on:keypress
	>
		<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
		<div class="h-0 w-0 overflow-hidden">
			<input bind:this={elemInput} type="radio" bind:group {name} {value} {...prunedRestProps()} tabindex="-1" on:click on:change />
		</div>
		<!-- Interface -->
		<div class="tab-interface {classesInterface}">
			{#if $$slots.lead}<div class="tab-lead"><slot name="lead" /></div>{/if}
			<div class="tab-label"><slot /></div>
		</div>
	</div>
</label>
