<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { AccordionItemProps } from './types.js';
	import { getAccordionContext } from './context.js';

	let {
		id,
		disabled = false,
		// Root
		base = '',
		spaceY = '',
		classes = '',
		// Control
		controlBase = 'flex text-start items-center space-x-4 w-full',
		controlHover = 'hover:preset-tonal-primary',
		controlPadding = 'py-2 px-4',
		controlRounded = 'rounded',
		controlClasses = '',
		// Icons
		iconsBase = '',
		// Panel
		panelBase = '',
		panelPadding = 'py-2 px-4',
		panelRounded = '',
		panelClasses = '',
		// Snippets
		control,
		controlLead,
		panel
	}: AccordionItemProps = $props();

	// Context
	const ctx = getAccordionContext();
</script>

<!-- @component AccordionItem -->

<div class="{base} {spaceY} {classes}" {...ctx.api.getItemProps({ value: id, disabled })}>
	<h3>
		<button
			class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
			{...ctx.api.getItemTriggerProps({ value: id, disabled })}
		>
			{#if controlLead}
				<div>{@render controlLead()}</div>
			{/if}
			<div class="flex-1">
				{@render control()}
			</div>
			<!-- Icons -->
			<div class={iconsBase}>
				{#if ctx.api.value.includes(id)}
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
	</h3>

	<div
		class="{panelBase} {panelPadding} {panelRounded} {panelClasses}"
		{...ctx.api.getItemContentProps({ value: id, disabled })}
		transition:slide={{ duration: ctx.animDuration }}
	>
		{@render panel?.()}
	</div>
</div>
