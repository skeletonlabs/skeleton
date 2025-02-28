<script lang="ts">
	import type { SegmentItemProps } from './types.js';
	import { getSegmentContext } from './context.js';

	let {
		// Root
		base = 'btn cursor-pointer z-[1]',
		classes = '',
		// State
		stateDisabled = 'disabled',
		stateFocused = 'focused',
		// Label
		labelBase = 'pointer-events-none transition-colors duration-100',
		labelClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: SegmentItemProps = $props();

	// Context
	const ctx = getSegmentContext();

	// Reactive
	const state = $derived(ctx.api.getItemState(zagProps));
	const rxDisabled = $derived(state.disabled ? stateDisabled : '');
	const rxActiveText = $derived(state.checked ? ctx.indicatorText : '');
	const rxFocused = $derived(state.focused ? stateFocused : '');
</script>

<!-- @component An individual Segment option. -->

<label {...ctx.api.getItemProps(zagProps)} class="{base} {rxDisabled} {rxFocused} {classes}" data-testid="segment-item">
	<!-- Label -->
	<span {...ctx.api.getItemTextProps(zagProps)} class="{labelBase} {rxActiveText} {labelClasses}" data-testid="segment-item-label">
		{@render children?.()}
	</span>
	<!-- Hidden Input -->
	<input {...ctx.api.getItemHiddenInputProps(zagProps)} data-testid="segment-item-input" />
</label>
