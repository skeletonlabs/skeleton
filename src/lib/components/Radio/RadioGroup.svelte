<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { setContext } from 'svelte';

	// Props
	export let selected: Writable<any>;
	export let display: string = 'inline-flex'; // inline-flex | flex | block
	export let background: string = 'bg-surface-300 dark:bg-surface-700';
	export let hover: string = 'hover:bg-accent-500/10';
	export let accent: string = 'bg-accent-500 !text-white';
	export let color: string = 'text-white';
	export let fill: string | undefined = undefined;
	export let rounded: string = 'rounded';
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
	let cBaseGroup: string = `items-center p-1 rounded overflow-hidden space-x-1`;

	// Reactive
	$: classesGroup = `${cBaseGroup} ${display} ${background} ${rounded} ${$$props.class ?? ''}`;
</script>

<div class="radio-group {classesGroup}" data-testid="radio-group" role="radiogroup" aria-label={label}>
	<slot />
</div>
