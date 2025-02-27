<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getAccordionContext } from './context.js';
	import type { AccordionItemProps } from './types.js';

	// Props
	const {
		headingLevel = 3,
		// Root
		base,
		spaceY,
		classes,
		// Control
		controlBase = 'flex text-start items-center space-x-4 w-full',
		controlHover = 'hover:preset-tonal-primary',
		controlPadding = 'py-2 px-4',
		controlRounded = 'rounded-base',
		controlClasses,
		// Lead
		leadBase = '',
		leadClasses = '',
		// Content
		contentBase = 'flex-1',
		contentClasses = '',
		// Indicator
		indicatorBase = '',
		indicatorClasses = '',
		// Panel
		panelBase,
		panelPadding = 'py-2 px-4',
		panelRounded,
		panelClasses,
		// Snippets
		control,
		lead,
		panel,
		...zagProps
	}: AccordionItemProps = $props();

	// Context
	const ctx = getAccordionContext();
</script>

<!-- @component A accordion item component. -->

<div class="{base} {spaceY} {classes}" {...ctx.api.getItemProps(zagProps)} data-testid="accordion-item">
	<!-- Control -->
	<svelte:element this={`h${headingLevel}`}>
		<button
			class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
			{...ctx.api.getItemTriggerProps(zagProps)}
			data-testid="accordion-control"
		>
			<!-- Lead -->
			{#if lead}
				<div class="{leadBase} {leadClasses}" data-testid="accordion-lead">{@render lead()}</div>
			{/if}
			<!-- Content -->
			<div class="{contentBase} {contentClasses}" data-testid="accordion-control">
				{@render control()}
			</div>
			<!-- Indicator -->
			<div class="{indicatorBase} {indicatorClasses}" data-testid="accordion-indicator">
				{#if ctx.api.value.includes(zagProps.value)}
					{#if ctx.iconOpen}
						{@render ctx.iconOpen()}
					{:else}
						&minus;
					{/if}
				{:else if ctx.iconClosed}
					{@render ctx.iconClosed()}
				{:else}
					&plus;
				{/if}
			</div>
		</button>
	</svelte:element>

	<!-- Panel -->
	{#if ctx.api.value.includes(zagProps.value)}
		<div
			class="{panelBase} {panelPadding} {panelRounded} {panelClasses}"
			{...ctx.api.getItemContentProps(zagProps)}
			transition:slide={ctx.animationConfig}
			data-testid="accordion-panel"
		>
			{@render panel?.()}
		</div>
	{/if}
</div>
