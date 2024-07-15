<script lang="ts">
	import type { SegmentItemProps } from './types.js';
	import { getSegmentContext } from './context.js';

	let {
		id,
		value,
		title,
		disabled = false,
		// Root
		base = 'btn',
		active = 'preset-filled',
		hover = 'hover:preset-tonal',
		classes = '',
		// Label
		labelBase = 'pointer-events-none',
		labelClasses = '',
		// Events
		onclick = () => {},
		// Snippets
		children
	}: SegmentItemProps = $props();

	// Context
	const ctx = getSegmentContext();

	function onClickHandler() {
		ctx.onSelectionHandler(value);
		if (onclick) onclick(value);
	}

	// Reactive
	const selected = $derived(value === ctx.value);
	const rxActive = $derived(selected ? active : hover);
</script>

<button onclick={onClickHandler} type="button" class="{base} {rxActive} {classes}" {title} {disabled} data-testid="segment-item">
	<!-- Input -->
	{#if selected}<input type="hidden" name={ctx.name} {id} {value} />{/if}
	<!-- Label -->
	<label for={ctx.name} class="{labelBase} {labelClasses}">
		{#if children}{@render children()}{/if}
	</label>
</button>
