<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as combobox from '@zag-js/combobox';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { ComboboxProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		data = $bindable([]),
		label = '',
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
		inputGroupInput = '',
		inputGroupButton = 'input-group-cell',
		inputGroupArrow = '',
		inputGroupClasses = '',
		// Content
		contentBase = 'card p-2',
		contentBackground = 'preset-outlined-surface-200-800 bg-surface-50-950',
		contentClasses = '',
		// List
		listBase = '',
		listClasses = '',
		// Option
		optionBase = 'btn justify-start w-full',
		optionHover = 'hover:preset-tonal',
		optionClasses = '',
		// Snippets
		arrow,
		// Zag ---
		...zagProps
	}: ComboboxProps = $props();

	// Zag
	let options = $state.frozen(data);
	const collection = combobox.collection({
		items: data,
		// Map data structure
		itemToValue: (item) => item.value,
		itemToString: (item) => item.label
	});
	const [snapshot, send] = useMachine(
		combobox.machine({
			id: useId(),
			collection,
			onOpenChange() {
				options = data;
			},
			onInputValueChange({ inputValue }) {
				const filtered = data.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()));
				const newOptions = filtered.length > 0 ? filtered : data;
				collection.setItems(newOptions);
				options = newOptions;
			}
		}),
		{
			context: {
				...zagProps,
				get data() {
					return $state.snapshot(data);
				}
			}
		}
	);
	const api = $derived(combobox.connect(snapshot, send, normalizeProps));
</script>

<span {...api.getRootProps()} class="{base} {width} {classes}">
	<!-- Label -->
	<label {...api.getLabelProps()} class="{labelBase} {labelClasses}">
		{#if label}<span class={labelText}>{label}</span>{/if}
		<!-- Input Group -->
		<div {...api.getControlProps()} class="{inputGroupBase} {inputGroupClasses}">
			<!-- Input -->
			<input {...api.getInputProps()} class={inputGroupInput} />
			<!-- Arrow -->
			<button {...api.getTriggerProps()} class={inputGroupButton}>
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
	<!-- Content -->
	{#if api.open}
		<div {...api.getPositionerProps()} transition:fade={{ duration: 100 }} class="{contentBase} {contentBackground} {contentClasses}">
			{#if options.length > 0}
				<!-- List -->
				<nav {...api.getContentProps()} class="{listBase} {listClasses}">
					{#each options as item}
						<!-- Option -->
						<button {...api.getItemProps({ item })} class="{optionBase} {optionHover} {optionClasses}">
							{item.label}
						</button>
					{/each}
				</nav>
			{/if}
		</div>
	{/if}
</span>
