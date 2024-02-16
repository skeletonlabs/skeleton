<script lang="ts">
	import { getContext, untrack, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	// FIXME:
	// import { State } from '$lib/utils.svelte.js';
	export class State<T> {
		value = $state() as T;
		constructor(initial: T) {
			this.value = initial;
		}
	}

	type ToggleEvent = CustomEvent<{ id: string; open: boolean }>;

	interface AccordionItemProps {
		/** Set a unique ID for the item. */
		id: string;
		/** Set the open state of the item. */
		open?: boolean;
		/** Set a disabled state for the item. */
		disabled?: boolean;

		// Root ---
		/** Sets base styles. */
		base?: string;
		/** Set vertical spacing styles. */
		spaceY?: string;
		/** Provide arbitrary CSS classes. */
		classes?: string;

		// Control ---
		/** Sets control's base styles. */
		controlBase?: string;
		/** Sets control's the hover styles. */
		controlHover?: string;
		/** Sets control's the padding styles. */
		controlPadding?: string;
		/** Sets control's the border radius styles. */
		controlRounded?: string;
		/** Provide arbitrary CSS classes to the control. */
		controlClasses?: string;

		// Icons ---
		/** Set the base styles for the state icons. */
		iconsBase?: string;

		// Panel ---
		/** Set the panel's base styles. */
		panelBase?: string;
		/** Set the panel's padding styles. */
		panelPadding?: string;
		/** Set the panel's border-radius styles. */
		panelRounded?: string;
		/** Provide arbitrary CSS classes to the panel. */
		panelClasses?: string;

		// Events ---
		/** Handle the toggle event. */
		ontoggle?: (toggleEvent: ToggleEvent) => void;
		// Snippets ---
		/** The control's default slot. */
		control: Snippet;
		/** The control's lead icon slot. */
		controlLead?: Snippet;
		/** The panels's default slot. */
		panel?: Snippet;
	}

	let {
		id = String(Math.random()), // <-- FIXME: prototype only
		open,
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
	} = $props<AccordionItemProps>();

	// Context
	const selected = getContext<State<string[]>>('selected');
	const animDuration = getContext<number>('animDuration');
	const multiple = getContext<boolean>('multiple');
	const iconOpen = getContext<Snippet>('iconOpen');
	const iconClosed = getContext<Snippet>('iconClosed');

	// Derived State
	const isOpen = $derived(selected.value.includes(id));

	// Controlled State
	$effect(() => {
		open ? untrack(setOpen) : untrack(setClosed);
	});

	// Syncing Controlled State
	$effect(() => {
		open = isOpen;
	});

	function onclick() {
		isOpen ? setClosed() : setOpen();
		// Trigger the toggle event
		ontoggle(new CustomEvent('toggle', { detail: { id, open: isOpen } }));
	}

	function setOpen() {
		if (!multiple) selected.value = [];
		selected.value.push(id);
	}

	function setClosed() {
		selected.value = selected.value.filter((itemId: string) => itemId !== id);
	}
</script>

<!-- @component An Accordion child item. -->

<div class="{base} {spaceY} {classes}" data-testid="accordion-item">
	<!-- Control -->
	<button
		type="button"
		class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
		aria-expanded={isOpen}
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
			{#if isOpen}
				{#if iconOpen}{@render iconOpen()}{:else}&minus;{/if}
			{:else if iconClosed}{@render iconClosed()}{:else}&plus;{/if}
		</div>
	</button>
	<!-- Panel -->
	{#if panel && isOpen}
		<div
			class="{panelBase} {panelPadding} {panelRounded} {panelClasses}"
			transition:slide={{ duration: animDuration }}
			id="accordion-panel-{id}"
			role="region"
			aria-hidden={isOpen}
			aria-labelledby={id}
		>
			{@render panel()}
		</div>
	{/if}
</div>
