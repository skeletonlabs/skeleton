<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as combobox from '@zag-js/combobox';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { ComboboxProps } from './types.js';

	const {
		data = [],
		// Base
		base = '',
		width = '',
		classes = '',
		// Label
		label = '',
		labelBase = 'label',
		labelClasses = '',
		// Input
		inputGroupBase = 'input-group grid-cols-[1fr_auto]',
		inputGroupInput = '',
		inputGroupButton = 'input-group-cell',
		inputGroupArrow = '',
		inputGroupClasses = '',
		// Positioner
		positionerBase = '',
		zIndex = 'auto',
		positionerClasses = '',
		// Content
		contentBase = 'card p-2',
		contentBackground = 'preset-outlined-surface-200-800 bg-surface-50-950',
		contentSpaceY = 'space-y-1',
		contentClasses = '',
		// Option
		optionBase = 'btn justify-start w-full',
		optionHover = 'hover:preset-tonal',
		optionActive = 'preset-filled-primary-500',
		optionClasses = '',
		// Snippets
		arrow,
		// Events
		onclick,
		// Zag
		...zagProps
	}: ComboboxProps = $props();

	// Collection

	// Zag
	const collection = $derived(
		combobox.collection({
			items: data,
			itemToValue: (item) => item.value,
			itemToString: (item) => item.label
		})
	);
	let options = $state.raw(data);
	const id = $props.id();
	const service = useMachine(combobox.machine, () => ({
		id: id,
		get collection() {
			return collection;
		},
		onOpenChange(event) {
			options = data;
			zagProps.onOpenChange?.(event);
		},
		onInputValueChange(event) {
			const filtered = data.filter((item) => item.label.toLowerCase().includes(event.inputValue.toLowerCase()));
			const newOptions = filtered.length > 0 ? filtered : data;
			options = newOptions;
			zagProps.onInputValueChange?.(event);
		},
		...zagProps
	}));
	const api = $derived(combobox.connect(service, normalizeProps));
	const triggerProps = $derived(
		mergeProps(api.getTriggerProps(), {
			onclick: onclick
		})
	);
</script>

<div {...api.getRootProps()} class="{base} {width} {classes}" data-testid="combobox">
	<!-- Label -->
	<label {...api.getLabelProps()} class="{labelBase} {labelClasses}">{label}</label>
	<!-- Control-->
	<div {...api.getControlProps()} class="{inputGroupBase} {inputGroupClasses}">
		<!-- Input -->
		<input {...api.getInputProps()} class={inputGroupInput} disabled={api.disabled} />
		<!-- Trigger -->
		<button {...triggerProps} class={inputGroupButton} disabled={api.disabled}>
			{#if arrow}
				{@render arrow()}
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					style="opacity: 0.5"
					class={inputGroupArrow}
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			{/if}
		</button>
	</div>
	<!-- Positioner -->
	<div {...api.getPositionerProps()} transition:fade={{ duration: 100 }} class="{positionerBase} {positionerClasses}">
		{#if options.length > 0}
			<!-- Content -->
			<ul {...api.getContentProps()} class="{contentBase} {contentBackground} {contentSpaceY} {contentClasses}" style="z-index: {zIndex}">
				{#each options as option}
					{@const itemProps = api.getItemProps({ item: option })}
					{@const optionState = itemProps['data-state'] === 'checked' ? optionActive : optionHover}
					<!-- Option -->
					<li {...itemProps} class="{optionBase} {optionState} {optionClasses}">
						{option.label}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style lang="postcss">
	[data-part='item'][data-highlighted]:not([data-state='checked']) {
		@apply bg-surface-500/10;
	}
</style>
