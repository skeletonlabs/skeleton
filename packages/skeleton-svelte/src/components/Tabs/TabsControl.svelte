<script lang="ts">
	import { getTabContext } from './context.js';
	import type { TabsControlProps } from './types.js';

	const ctx = getTabContext();

	export let href: string | undefined;
	export let base = 'border-b-[1px] border-transparent';
	export let padding = 'pb-2';
	export let translateX = 'translate-y-[1px]';
	export let classes = '';
	export let labelBase = 'btn hover:preset-tonal-primary';
	export let labelClasses = '';
	export let stateInactive = '[&:not(:hover)]:opacity-50';
	export let stateActive = 'border-b-surface-950-50 opacity-100';
	export let stateLabelInactive = '';
	export let stateLabelActive = '';
	export let lead: (() => any) | undefined;
	export let children: (() => any) | undefined;

	const state = $derived(ctx.api.getTriggerState({ href }));

	const rxActive = $derived(state.selected ? stateActive : stateInactive);
	const rxLabelActive = $derived(state.selected ? stateLabelActive : stateLabelInactive);

	const commonWidth = $derived(ctx.fluid ? '100%' : '');

	const triggerProps = ctx.api.getTriggerProps({ href });
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...triggerProps}
	class="{base} {padding} {translateX} {rxActive} {classes}"
	style:width={commonWidth}
	data-testid="tabs-control"
>
	<div
		class="{labelBase} {rxLabelActive} {labelClasses}"
		style:width={commonWidth}
		data-testid="tabs-control-label"
	>
		{#if lead}<span>{@render lead()}</span>{/if}
		<span>{@render children?.()}</span>
	</div>
</svelte:element>
