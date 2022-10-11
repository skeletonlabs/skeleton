<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Props
	export let selected: Writable<any>;
	export let display: string = 'inline-flex'; // inline-flex | flex | block
	export let background: string = 'bg-surface-200-700-token';
	export let borderWidth: string = 'border-token';
	export let borderColor: string = 'border-surface-300 dark:border-surface-600';
	export let hover: string = 'bg-accent-hover-token';
	export let accent: string = 'bg-accent-active-token';
	export let color: string = 'text-surface-50';
	export let fill: string | undefined = undefined;
	export let rounded: string = 'rounded-token';
	// A11y
	export let label: string = 'radiogroup';

	// Context
	setContext('selected', selected);
	setContext('hover', hover);
	setContext('accent', accent);
	setContext('color', color);
	setContext('fill', fill);
	setContext('rounded', rounded);

	// Base Classes
	let cBaseGroup: string = `items-center p-1 overflow-hidden space-x-1 rounded-token`;

	// Reactive
	$: classesGroup = `${cBaseGroup} ${display} ${background} ${borderColor} ${borderWidth} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="radio-group {classesGroup}" data-testid="radio-group" role="radiogroup" aria-label={label}>
	<slot />
</div>
