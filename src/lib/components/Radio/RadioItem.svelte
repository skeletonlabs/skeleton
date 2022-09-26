<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { createEventDispatcher, getContext } from 'svelte';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props
	export let value: any = undefined;
	// Props (A11y)
	export let label: string | undefined = undefined;

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let hover: string = getContext('hover');
	export let accent: string = getContext('accent');
	export let color: string = getContext('color');
	export let fill: string = getContext('fill');
	export let rounded: string = getContext('rounded');

	// Base Classes
	const cBase: string = ' font-bold text-base text-center px-4 py-2 cursor-pointer whitespace-nowrap';

	// A11y Input Handlers
	function onKeyDown(event: any): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			dispatch('keydown', event);
			event.target.children[0].click();
		}
	}

	// Reactive Classes
	$: checked = value === $selected;
	$: classesSelected = checked ? `${accent} ${color} ${fill} shadow` : `${hover}`;
	$: classesLabel = `${cBase} ${classesSelected} ${rounded}`;
</script>

<div class="radio-item flex-auto" role="radio" aria-checked={checked} aria-label={label} tabindex="0" data-testid="radio-item" on:click on:keydown={onKeyDown}>
	<label class="radio-item-label {classesLabel}">
		<input class="hidden" type="radio" {value} bind:group={$selected} />
		<slot />
	</label>
</div>
