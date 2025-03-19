<script lang="ts">
	import { getTabContext } from './context.js';
	import type { TabsControlProps } from './types.js';

	const {
		// Root
		base = 'border-b-[1px] border-transparent',
		padding = 'pb-2',
		translateX = 'translate-y-[1px]',
		classes = '',
		// Label
		labelBase = 'flex items-center justify-center gap-2 py-1 px-4 transition-all rounded-base hover:preset-tonal-primary',
		labelClasses = '',
		// State
		stateInactive = '',
		stateActive = 'border-b-surface-950-50',
		stateLabelInactive = '[&:not(:hover)]:opacity-50',
		stateLabelActive = 'opacity-100',
		// Snippets
		lead,
		children,
		// Zag
		...zagProps
	}: TabsControlProps = $props();

	// Get Context
	const ctx = getTabContext();
	const state = $derived(ctx.api.getTriggerState(zagProps));

	// Reactive
	const rxActive = $derived(state.selected ? stateActive : stateInactive);
	const rxLabelActive = $derived(state.selected ? stateLabelActive : stateLabelInactive);

	// Styles
	const commonWidth = $derived(ctx.fluid ? '100%' : '');
</script>

<!-- @component A individual tab trigger element. -->

<button
	{...ctx.api.getTriggerProps(zagProps)}
	class="{base} {padding} {translateX} {rxActive} {classes}"
	style:width={commonWidth}
	data-testid="tabs-control"
>
	<!-- Label -->
	<div class="{labelBase} {rxLabelActive} {labelClasses}" style:width={commonWidth} data-testid="tabs-control-label">
		{#if lead}<span>{@render lead()}</span>{/if}
		<span>{@render children?.()}</span>
	</div>
</button>
