<script lang="ts">
	import * as rating from '@zag-js/rating-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import { starEmpty, starHalf, starFull } from '$lib/internal/snippets.js';
	import type { RatingProps } from './types.js';
	import { noop } from '$lib/internal/noop.js';

	// Props
	let {
		value = $bindable(),
		// Root
		base = '',
		classes = '',
		// Control
		controlBase = 'flex',
		controlGap = 'gap-2',
		controlClasses,
		// Label
		labelBase = '',
		labelClasses = '',
		// Item
		itemBase = '',
		itemClasses = '',
		// State
		stateReadOnly = 'opacity-50',
		stateDisabled = 'cursor-not-allowed opacity-50',
		// Icons
		iconEmpty = starEmpty,
		iconHalf = starHalf,
		iconFull = starFull,
		// Children
		label,
		// Events
		onValueChange = noop,
		// Zag
		...zagProps
	}: RatingProps = $props();

	// Machine
	const [state, send] = useMachine(
		rating.machine({
			id: useId(),
			onValueChange: (details) => {
				value = details.value;
				onValueChange(details.value);
			}
		}),
		{
			context: {
				...zagProps,
				get value() {
					return value;
				}
			}
		}
	);

	// API
	const api = $derived(rating.connect(state, send, normalizeProps));

	// Reactive
	const rxReadOnly = $derived(state.context.readOnly ? stateReadOnly : '');
	const rxDisabled = $derived(state.context.disabled ? stateDisabled : '');
</script>

<!-- @component A rating component. -->

<!-- Root -->
<div {...api.getRootProps()} class="{base} {classes}">
	<!-- Label -->
	{#if !!label}
		<label class="{labelBase} {labelClasses}" {...api.getLabelProps()}>
			{@render label()}
		</label>
	{/if}
	<!-- Control -->
	<div class="{controlBase} {controlGap} {rxReadOnly} {rxDisabled} {controlClasses}" {...api.getControlProps()}>
		{#each api.items as index}
			{@const itemState = api.getItemState({ index })}
			<!-- Item -->
			<span class="{itemBase} {itemClasses}" {...api.getItemProps({ index })}>
				{#if !itemState.highlighted}
					{@render iconEmpty()}
				{:else if itemState.half}
					{@render iconHalf()}
				{:else}
					{@render iconFull()}
				{/if}
			</span>
		{/each}
	</div>
	<!-- Hidden Input -->
	<input {...api.getHiddenInputProps()} />
</div>
