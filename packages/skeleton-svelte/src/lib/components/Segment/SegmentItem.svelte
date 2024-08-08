<script lang="ts">
	import type { SegmentItemProps } from './types.js';
	import { getSegmentContext } from './context.js';

	let {
		value,
		// Root
		base = 'btn cursor-pointer z-[1]',
		classes = '',
		// State
		stateDisabled = 'disabled',
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
	/* @ts-expect-error FIXME: doesn't match React implentation; provides type error */
	const state = ctx.api.getItemState(zagProps);

	// Reactive
	const rxDisabled = $derived(state.disabled ? stateDisabled : '');
	// FIXME: doesn't match React implentation; should use: state.checked
	const rxActiveText = $derived(ctx.api.value === value ? ctx.indicatorText : '');
</script>

<label {...ctx.api.getItemProps({ value: value })} class="{base} {rxDisabled} {classes}" data-testid="segment-item">
	<!-- Label -->
	<span {...ctx.api.getItemTextProps({ value: value })} class="{labelBase} {rxActiveText} {labelClasses}">
		{@render children?.()}
	</span>
	<!-- Hidden Input -->
	<input {...ctx.api.getItemHiddenInputProps({ value: value })} />
</label>
