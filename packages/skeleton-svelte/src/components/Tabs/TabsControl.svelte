<script lang="ts">
	import { getTabContext } from './context.js';
	import type { TabsControlProps } from './types.js';

	const {
		// New prop to choose element type
		as = 'button', // 'button' or 'a'

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
		stateActive = 'border-b-surface-950-50 opacity-100',
		stateLabelInactive = '',
		stateLabelActive = '',
		// Snippets
		lead,
		children,
		// Zag props
		...zagProps
	}: TabsControlProps = $props();

	// Context
	const ctx = getTabContext();
	const state = $derived(ctx.api.getTriggerState(zagProps));

	// State classes
	const rxActive = $derived(state.selected ? stateActive : stateInactive);
	const rxLabelActive = $derived(state.selected ? stateLabelActive : stateLabelInactive);

	// Layout
	const commonWidth = $derived(ctx.fluid ? '100%' : '');

	// Get all trigger props from Zag.js
	const triggerProps = ctx.api.getTriggerProps(zagProps);
</script>

<!-- @component Individual tab trigger (anchor or button) -->

{#if as === 'a'}
	<a
		{...triggerProps}
		class="{base} {padding} {translateX} {rxActive} {classes}"
		style:width={commonWidth}
		data-testid="tabs-control"
	>
		<!-- Label -->
		<div
			class="{labelBase} {rxLabelActive} {labelClasses}"
			style:width={commonWidth}
			data-testid="tabs-control-label"
		>
			{#if lead}<span>{@render lead()}</span>{/if}
			<span>{@render children?.()}</span>
		</div>
	</a>
{:else}
	<button
		{...triggerProps}
		class="{base} {padding} {translateX} {rxActive} {classes}"
		style:width={commonWidth}
		data-testid="tabs-control"
	>
		<!-- Label -->
		<div
			class="{labelBase} {rxLabelActive} {labelClasses}"
			style:width={commonWidth}
			data-testid="tabs-control-label"
		>
			{#if lead}<span>{@render lead()}</span>{/if}
			<span>{@render children?.()}</span>
		</div>
	</button>
{/if}
