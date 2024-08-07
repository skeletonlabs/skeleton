<script lang="ts">
	import type { SegmentItemProps } from './types.js';
	import { getSegmentContext } from './context.js';

	let {
		value,
		// Root
		base = 'btn cursor-pointer z-[1]',
		classes = '',
		// Label
		labelBase = 'pointer-events-none transition-colors duration-100',
		labelClasses = '',
		// Snippets
		children
	}: SegmentItemProps = $props();

	// Context
	const ctx = getSegmentContext();

	// Reactive
	const rxActiveText = $derived(ctx.api.value === value ? ctx.indicatorText : '');
</script>

<label {...ctx.api.getItemProps({ value: value })} class="{base} {classes}" data-testid="segment-item">
	<!-- Label -->
	<span {...ctx.api.getItemTextProps({ value: value })} class="{labelBase} {rxActiveText} {labelClasses}">
		{@render children?.()}
	</span>
	<!-- Hidden Input -->
	<input {...ctx.api.getItemHiddenInputProps({ value: value })} />
</label>
