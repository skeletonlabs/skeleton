<script lang="ts">
	import { getAccordionCtx } from './Accordion.svelte';
	import { slide } from 'svelte/transition';

	import type { AccordionItemProps } from './types.js';
	import { untrack } from 'svelte';

	let {
		id = '',
		open = $bindable(false),
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
		// Events
		ontoggle = () => {},
		// Snippets
		control,
		controlLead,
		panel
	}: AccordionItemProps = $props();

	// Context
	const ctx = getAccordionCtx();

	// Functions
	function onclick() {
		ctx.toggle(id);
	}

	// Effects
	$effect(() => {
		if (open === ctx.isOpen(id)) {
			return;
		}
		ontoggle(new CustomEvent('toggle', { detail: { id: untrack(() => id), open: ctx.isOpen(id) } }));
	});

	$effect(() => {
		open ? untrack(() => ctx.open(id)) : untrack(() => ctx.close(id));
	});

	$effect(() => {
		open = ctx.isOpen(id);
	});
</script>

<!-- @component An Accordion child item. -->

<div class="{base} {spaceY} {classes}" data-testid="accordion-item">
	<!-- Control -->
	<button
		type="button"
		{id}
		class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
		aria-expanded={ctx.isOpen(id)}
		aria-controls="accordion-panel-{id}"
		{onclick}
		{disabled}
	>
		<!-- Lead -->
		{#if controlLead}<div>{@render controlLead()}</div>{/if}
		<!-- Content -->
		<div class="flex-1">{@render control()}</div>
		<!-- Icons -->
		<div class={iconsBase}>
			{#if ctx.isOpen(id)}
				{#if ctx.iconOpen}{@render ctx.iconOpen()}{:else}&minus;{/if}
			{:else if ctx.iconClosed}{@render ctx.iconClosed()}{:else}&plus;{/if}
		</div>
	</button>
	<!-- Panel -->
	{#if panel && ctx.isOpen(id)}
		<div
			class="{panelBase} {panelPadding} {panelRounded} {panelClasses}"
			transition:slide={{ duration: ctx.animDuration }}
			id="accordion-panel-{id}"
			role="region"
			aria-hidden={ctx.isOpen(id)}
			aria-labelledby={id}
		>
			{@render panel()}
		</div>
	{/if}
</div>
