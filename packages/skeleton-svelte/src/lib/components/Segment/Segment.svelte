<script lang="ts">
	import type { SegmentControl } from './types.js';
	import { setSegmentContext } from './context.js';

	let {
		value = $bindable(''),
		name = '',
		// Root
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = 'p-2',
		flexDirection = 'flex-row', // vertical: flex-col
		gap = 'gap-2',
		padding = '',
		rounded = 'rounded-container',
		width = '',
		classes = '',
		// Events
		onchange,
		// Snippets
		children
	}: SegmentControl = $props();

	function onSelectionHandler(newValue: string) {
		value = newValue;
		if (onchange) onchange(newValue);
	}

	// Set Context
	setSegmentContext({
		get value() {
			return value;
		},
		get name() {
			return name;
		},
		onSelectionHandler
	});
</script>

<div
	role="radiogroup"
	class="{base} {flexDirection} {background} {border} {padding} {gap} {rounded} {width} {classes}"
	data-testid="segment"
>
	{#if children}{@render children()}{/if}
</div>
