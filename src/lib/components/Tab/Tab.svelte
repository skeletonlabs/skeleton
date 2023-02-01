<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides a leading position, which can be used for icons.
	 */

	import { getContext } from 'svelte';

	// Props
	/** Set the radio group binding value. */
	export let group: any;
	/** Set a unique name value for the input. */
	export let name: string;
	/** Set the input's value. */
	export let value: any;

	// Props (a11y)
	/** Set the ARIA controls value to define which panel this tab controls. */
	export let controls: string = '';

	// Context
	/** Provide classes to style each tab's active styles. */
	export let active: string = getContext('active');
	/** Provide classes to style each tab's hover styles. */
	export let hover: string = getContext('hover');
	/** Provide classes to style each tab's flex styles. */
	export let flex: string = getContext('flex');
	/** Provide classes to style each tab's padding styles. */
	export let padding: string = getContext('padding');
	/** Provide classes to style each tab's box radius styles. */
	export let rounded: string = getContext('rounded');

	// Classes
	const cBase = 'text-center cursor-pointer transition-colors duration-100';
	const cInterface = '';

	// Local
	let elemInput: HTMLElement;

	function onKeypress(event: any): void {
		// Enter/Space to toggle element
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			elemInput.click();
		}
	}

	// Reactive
	$: selected = value === group;
	$: classesActive = selected ? active : hover;
	$: classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ''}`;
	$: classesInterface = `${cInterface}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<label
	class="tab {classesBase}"
	role="tab"
	aria-controls={controls}
	aria-selected={selected}
	tabindex="0"
	data-testid="tab"
	on:click
	on:keypress={onKeypress}
	on:keypress
	on:keydown
	on:keyup
>
	<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
	<div class="h-0 w-0 overflow-hidden">
		<input bind:this={elemInput} type="radio" bind:group {name} {value} {...prunedRestProps()} tabindex="-1" />
	</div>
	<!-- Interface -->
	<div class="tab-interface {classesInterface}">
		{#if $$slots.lead}<div class="tab-lead"><slot name="lead" /></div>{/if}
		<div class="tab-label"><slot /></div>
	</div>
</label>
