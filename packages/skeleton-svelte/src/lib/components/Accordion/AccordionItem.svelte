<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getAccordionContext } from './context.js';
	import type { AccordionItemProps } from './types.js';

	// Props
	const {
		headingElement = 'h3',
		// Root
		base,
		spaceY,
		classes,
		// Control
		controlBase = 'flex text-start items-center space-x-4 w-full',
		controlHover = 'hover:preset-tonal-primary',
		controlPadding = 'py-2 px-4',
		controlRounded = 'rounded',
		controlClasses,
		// Icons
		iconsBase,
		// Panel
		panelBase,
		panelPadding = 'py-2 px-4',
		panelRounded,
		panelClasses,
		// Snippets
		control,
		controlLead,
		panel,
		...zagProps
	}: AccordionItemProps = $props();

	// Context
	const ctx = getAccordionContext();
</script>

<!-- @component A accordion item component. -->

<div class="{base} {spaceY} {classes}" {...ctx.api.getItemProps(zagProps)} data-testid="accordion-item">
	<!-- Control -->
	<svelte:element this={headingElement}>
		<button
			class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
			{...ctx.api.getItemTriggerProps(zagProps)}
			data-testid="accordion-control"
		>
			<!-- Lead -->
			{#if controlLead}
				<div data-testid="accordion-lead">{@render controlLead()}</div>
			{/if}
			<!-- Content -->
			<div class="flex-1" data-testid="accordion-control">
				{@render control()}
			</div>
			<!-- Indicator -->
			<div class={iconsBase} data-testid="accordion-indicator">
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
			transition:slide={{ duration: ctx.animDuration }}
			data-testid="accordion-panel"
		>
			{@render panel?.()}
		</div>
	{/if}
</div>
