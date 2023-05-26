<script lang="ts">
	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '../..';

	// Props
	/**
	 * Set the radio group binding value.
	 * @type {any}
	 */
	export let group: any;
	/** Set a unique name value for the input. */
	export let name: string;
	/**
	 * Set the input's value.
	 * @type {any}
	 */
	export let value: any;
	/** Set the hover title. */
	export let title = '';

	// Props (A11y)
	/** Defines a semantic ARIA label. */
	export let label = '';

	// Context
	export let rounded: CssClasses = getContext('rounded');
	export let padding: CssClasses = getContext('padding');
	export let active: CssClasses = getContext('active');
	export let hover: CssClasses = getContext('hover');
	export let color: CssClasses = getContext('color');
	export let fill: CssClasses = getContext('fill');

	// Classes
	const cBase = 'flex-auto text-base text-center cursor-pointer';
	const cDisabled = 'opacity-50 cursor-not-allowed';

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
	$: checked = value === group;
	$: classesActive = checked ? `${active} ${color} ${fill}` : hover;
	$: classesDisabled = $$props.disabled ? cDisabled : '';
	$: classesBase = `${cBase} ${padding} ${rounded} ${classesActive} ${classesDisabled} ${$$props.class ?? ''}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<label>
	<!-- A11y attributes are not allowed on <label> -->
	<div
		class="radio-item {classesBase}"
		data-testid="radio-item"
		role="radio"
		aria-checked={checked}
		aria-label={label}
		tabindex="0"
		{title}
		on:keydown={onKeyDown}
		on:keydown
		on:keyup
		on:keypress
	>
		<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
		<div class="h-0 w-0 overflow-hidden">
			<input bind:this={elemInput} type="radio" bind:group {name} {value} {...prunedRestProps()} tabindex="-1" on:click on:change />
		</div>
		<slot />
	</div>
</label>
