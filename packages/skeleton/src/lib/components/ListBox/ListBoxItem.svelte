<script lang="ts">
	// Slots
	/**
	 * @slot lead - Positioned on the left of each row item.
	 * @slot trail - Positioned on the right of each row item.
	 */

	import { getContext } from 'svelte';

	// Types
	import type { CssClasses } from '../..';

	// Props
	/** Set the radio group binding value. */
	export let group: any;
	/** Set a unique name value for the input. */
	export let name: string;
	/** Set the input's value. */
	export let value: any;

	// Context
	export let multiple: string = getContext('multiple');
	export let rounded: CssClasses = getContext('rounded');
	export let active: CssClasses = getContext('active');
	export let hover: CssClasses = getContext('hover');
	export let padding: CssClasses = getContext('padding');

	// Classes
	const cBase = 'cursor-pointer -outline-offset-[3px]';
	const cLabel = 'flex items-center space-x-4';

	// Local
	let checked: boolean;
	let elemInput: HTMLElement;

	// Svelte Checkbox Bugfix
	// GitHub: https://github.com/sveltejs/svelte/issues/2308
	// REPL: https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
	$: if (multiple) updateCheckbox(group);
	$: if (multiple) updateGroup(checked);
	function updateCheckbox(group: any) {
		checked = group.indexOf(value) >= 0;
	}
	function updateGroup(checked: boolean) {
		const index = group.indexOf(value);
		if (checked) {
			if (index < 0) {
				group.push(value);
				group = group;
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1);
				group = group;
			}
		}
	}

	// A11y Key Down Handler
	function onKeyDown(event: KeyboardEvent): void {
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			elemInput.click();
		}
	}

	// Reactive
	$: selected = multiple ? group.includes(value) : group === value;
	$: classesActive = selected ? active : hover;
	$: classesBase = `${cBase} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
</script>

<label>
	<!-- A11y attributes are not allowed on <label> -->
	<div
		class="listbox-item {classesBase}"
		data-testid="listbox-item"
		role="option"
		aria-selected={selected}
		tabindex="0"
		on:keydown={onKeyDown}
		on:keydown
		on:keyup
		on:keypress
	>
		<!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
		<div class="h-0 w-0 overflow-hidden">
			{#if multiple}
				<input bind:this={elemInput} type="checkbox" {name} {value} bind:checked tabindex="-1" on:click on:change />
			{:else}
				<input bind:this={elemInput} type="radio" bind:group {name} {value} tabindex="-1" on:click on:change />
			{/if}
		</div>
		<!-- <slot /> -->
		<div class="listbox-label {classesLabel}">
			<!-- Slot: Lead -->
			{#if $$slots.lead}<div class="listbox-label-lead"><slot name="lead" /></div>{/if}
			<!-- Slot: Default -->
			<div class="listbox-label-content flex-1"><slot /></div>
			<!-- Slot: Trail -->
			{#if $$slots.trail}<div class="listbox-label-trail"><slot name="trail" /></div>{/if}
		</div>
	</div>
</label>
