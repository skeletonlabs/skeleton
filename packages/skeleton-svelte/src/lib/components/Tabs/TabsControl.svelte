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
	const context = getTabContext();
	const state = $derived(context.api.getTriggerState(zagProps));

	const conditionalDisabled = $derived(state.selected ? stateActive : stateInactive);
	const conditionalLabelActive = $derived(state.selected ? stateLabelActive : stateLabelInactive);
	const commonWidth = $derived(context.fluid ? '100%' : '');
</script>

<!-- @component A individual tab trigger element. -->

<button
	{...context.api.getTriggerProps(zagProps)}
	class="{base} {padding} {translateX} {conditionalDisabled} {classes}"
	style:width={commonWidth}
	data-testid="tabs-control"
>
	<!-- Label -->
	<div class="{labelBase} {conditionalLabelActive} {labelClasses}" style:width={commonWidth} data-testid="tabs-control-label">
		{#if lead}<span>{@render lead()}</span>{/if}
		<span>{@render children?.()}</span>
	</div>
</button>
