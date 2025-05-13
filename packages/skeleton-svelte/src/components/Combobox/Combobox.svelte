<script lang="ts" generics="T extends ComboboxItem">
	import { fade } from 'svelte/transition';
	import * as combobox from '@zag-js/combobox';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { ComboboxProps, ComboboxItem } from './types.js';

	const {
		data = [],
		label = '',
		zIndex = 'auto',
		// Base
		base = '',
		width = '',
		classes = '',
		// Label
		labelBase = 'label',
		labelText = 'label-text',
		labelClasses = '',
		// Input
		inputGroupBase = 'input-group grid-cols-[1fr_auto]',
		inputGroupInput = 'ig-input',
		inputGroupButton = 'ig-btn hover:preset-tonal',
		inputGroupArrow = '',
		inputGroupClasses = '',
		// Positioner
		positionerBase = '',
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
		item,
		// Events
		onclick,
		// Zag ---
		...zagProps
	}: ComboboxProps<T> = $props();

	// Zag
	let options = $state.raw(data);
	const collection = $derived(
		combobox.collection({
			items: options,
			// Map data structure
			itemToValue: (item) => item.value,
			itemToString: (item) => item.label
		})
	);

	const id = $props.id();
	const service = useMachine(combobox.machine, () => ({
		id: id,
		collection: collection,
		...zagProps,
		onOpenChange(event) {
			options = data;
			zagProps.onOpenChange?.(event);
		},
		onInputValueChange(event) {
			const filtered = data.filter((item) => item.label.toLowerCase().includes(event.inputValue.toLowerCase()));
			options = filtered;
			zagProps.onInputValueChange?.(event);
		}
	}));
	const api = $derived(combobox.connect(service, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onclick }));
</script>

<span {...api.getRootProps()} class="{base} {width} {classes}" data-testid="combobox">
	<!-- Label -->
	<label {...api.getLabelProps()} class="{labelBase} {labelClasses}">
		{#if label}<span class={labelText}>{label}</span>{/if}
		<!-- Input Group -->
		<div {...api.getControlProps()} class="{inputGroupBase} {inputGroupClasses}">
			<!-- Input -->
			<input {...api.getInputProps()} class={inputGroupInput} />
			<!-- Arrow -->
			<button {...triggerProps} class={inputGroupButton}>
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
	</label>
	<!-- Menu -->
	{#if api.open}
		<div {...api.getPositionerProps()} transition:fade={{ duration: 100 }} class="{positionerBase} {positionerClasses}">
			{#if options.length > 0}
				<!-- Content (list) -->
				<nav
					{...api.getContentProps()}
					class="{contentBase} {contentBackground} {contentSpaceY} {contentClasses}"
					style="z-index: {zIndex}"
				>
					{#each options as option (option.label)}
						{@const isChecked = api.getItemProps({ item: option })['data-state'] === 'checked'}
						{@const displayClass = isChecked ? optionActive : optionHover}
						<!-- Option -->
						<!-- ZagJs should have set button type to "button" here. -->
						<!-- See https://github.com/skeletonlabs/skeleton/pull/2998#discussion_r1855511385 -->
						<button {...api.getItemProps({ item: option })} class="{optionBase} {displayClass} {optionClasses}" type="button">
							{#if item}
								{@render item(option)}
							{:else}
								{option.label}
							{/if}
						</button>
					{/each}
				</nav>
			{/if}
		</div>
	{/if}
</span>

<style>
	[data-part='item'][data-highlighted]:not([data-state='checked']) {
		background-color: var(--color-surface-200-800);
	}
</style>
