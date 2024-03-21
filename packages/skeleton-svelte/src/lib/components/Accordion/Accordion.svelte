<script lang="ts">
	import { setContext } from 'svelte';
	import type { AccordionProps } from './types.js';

	import { State } from '$lib/utils.svelte.js';

	let {
		multiple = false,
		animDuration = 200,
		// Root
		base = '',
		padding = '',
		spaceY = 'space-y-2',
		rounded = 'rounded',
		width = 'w-full',
		classes = '',
		// Snippets
		children,
		iconOpen,
		iconClosed
	}: AccordionProps = $props();

	// Context
	setContext('selected', new State<string[]>([]));
	setContext('animDuration', animDuration);
	setContext('multiple', multiple);
	setContext('iconOpen', iconOpen);
	setContext('iconClosed', iconClosed);
</script>

<!-- @component An Accordion parent component. -->

<div class="{base} {padding} {spaceY} {rounded} {width} {classes}" data-testid="accordion">
	{@render children()}
</div>
