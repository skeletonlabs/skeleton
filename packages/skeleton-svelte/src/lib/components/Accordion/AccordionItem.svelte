<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getAccordionContext } from './context.js';
	import type { AccordionItemProps } from './types.js';
	import * as accordion from '@zag-js/accordion';

	// Props
	const props: AccordionItemProps = $props();
	const [zagProps, skeletonProps] = $derived(accordion.splitItemProps(props));
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
		panel
	} = $derived(skeletonProps);

	// Context
	const ctx = getAccordionContext();
</script>

<!-- @component AccordionItem -->

<div class="{base} {spaceY} {classes}" {...ctx.api.getItemProps(zagProps)}>
	<!-- Control -->
	<svelte:element this={headingElement}>
		<button
			class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
			{...ctx.api.getItemTriggerProps(zagProps)}
		>
			<!-- Lead -->
			{#if controlLead}
				<div>{@render controlLead()}</div>
			{/if}
			<!-- Content -->
			<div class="flex-1">
				{@render control()}
			</div>
			<!-- Toggle Icons -->
			<div class={iconsBase}>
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
		>
			{@render panel?.()}
		</div>
	{/if}
</div>
