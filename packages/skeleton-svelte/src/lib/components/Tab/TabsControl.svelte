<script lang="ts">
	import { getTabsContextState } from './context.js';
	import type { TabsControlProps } from './types.js';

	let {
		// Root
		base = 'border-b border-transparent',
		padding = 'pb-2',
		translateX = 'translate-y-[1px]',
		classes = '',
		// Label
		labelBase = 'btn hover:preset-tonal-primary',
		labelClasses = '',
		// State
		stateInactive = '[&:not(:hover)]:opacity-50',
		stateActive = 'border-surface-950-50 opacity-100',
		stateLabelInactive = '',
		stateLabelActive = '',
		// Snippets
		lead,
		children,
		// Zag
		...zagProps
	}: TabsControlProps = $props();

	// Get Context
	const ctx = getTabsContextState();
	const state = $derived(ctx.api.getTriggerState(zagProps));

	// Reactive
	const rxActive = $derived(state.selected ? stateActive : stateInactive);
	const rxLabelActive = $derived(state.selected ? stateLabelActive : stateLabelInactive);

	// Styles
	const commonWidth = $derived(ctx.fluid ? '100%' : '');
</script>

<!-- @component A Tab Control component. -->

<button {...ctx.api.getTriggerProps(zagProps)} class="{base} {padding} {translateX} {rxActive} {classes}" style:width={commonWidth}>
	<!-- Label -->
	<div class="{labelBase} {rxLabelActive} {labelClasses}" style:width={commonWidth}>
		{#if lead}<span>{@render lead()}</span>{/if}
		<span>{@render children?.()}</span>
	</div>
</button>
