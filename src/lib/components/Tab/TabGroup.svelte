<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Props
	/**
	 * A svelte store to keep track of tab selection.
	 * @type {Writable(any)}
	 */
	export let selected: Writable<any>;
	/** Toggle display of the bottom border, below the tabs. */
	export let rail = true;
	/** Provide classes to set the flex justification. 'justify-start' is best for small screens. */
	export let justify = 'justify-start';
	/** Provide classes to set the selected border size. Shared between group and tab. */
	export let borderWidth = 'border-b-2';
	/** Provide classes to set the selected border color. */
	export let borderColor = 'border-primary-500';
	/** Provide class to set the selected text color. */
	export let color = 'text-primary-500';
	/** Provide classes to set the selected SVG fill color. */
	export let fill = 'fill-primary-500';
	/** Provide classes to set the unselected hover styles. */
	export let hover = 'bg-primary-hover-token';
	/** Provide classes to set the tab border radius styles. */
	export let rounded = 'rounded-tl-container-token rounded-tr-container-token';

	// A11y
	/** Provide the ID of the element that describes the group. */
	export let labeledby = '';
	/** Defines a semantic label for the group. */
	export let label = '';

	// Set Context
	setContext('selected', selected);
	setContext('borderWidth', borderWidth);
	setContext('borderColor', borderColor);
	setContext('color', color);
	setContext('fill', fill);
	setContext('hover', hover);
	setContext('rounded', rounded);

	// Classes
	const cBase = 'border-surface-300-600-token flex hide-scrollbar overflow-x-auto';

	// Handle Home/End Input
	let elemTabGroup: HTMLElement;

	function keydown(event: KeyboardEvent) {
		if (['Home', 'End'].includes(event.code)) {
			event.preventDefault();
			if (event.code === 'Home') {
				(elemTabGroup.children[0] as HTMLElement).focus();
			}
			if (event.code === 'End') {
				(elemTabGroup.children[elemTabGroup.children.length - 1] as HTMLElement).focus();
			}
		}
	}

	// Reactive Classes
	$: classesRail = rail ? borderWidth : 'border-0';
	$: classesGroup = `${cBase} ${classesRail} ${justify} ${$$props.class ?? ''}`;
</script>

<!-- prettier-ignore -->
<nav class="tab-group" data-testid="tab-group">
	<ul
		bind:this={elemTabGroup}
		on:keydown={keydown}
		class="tab-group-list {classesGroup}"
		role="tablist"
		aria-labelledby={labeledby}
		aria-label={label}
	>
		<slot />
	</ul>
</nav>
