<script lang="ts">
	import * as rating from '@zag-js/rating-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { RatingProps } from './types.js';

	// Props
	let {
		value = $bindable(),
		base = 'flex gap-1',
		classes,
		labelBase,
		labelClasses,
		itemBase = 'cursor-pointer data-[disabled]:cursor-not-allowed data-[readonly]:cursor-default',
		itemClasses,
		label,
		iconEmpty = iconEmptyDefault,
		iconHalf = iconHalfDefault,
		iconFull = iconFullDefault,
		...zagProps
	}: RatingProps = $props();

	// Machine
	const [state, send] = useMachine(
		rating.machine({
			id: useId(),
			onValueChange: (details) => {
				value = details.value;
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
</script>

<!-- Default Snippets -->
{#snippet iconEmptyDefault()}
	<!-- TODO: Empty star here-->
{/snippet}

{#snippet iconHalfDefault()}
	<!-- TODO: Half filled star here-->
{/snippet}

{#snippet iconFullDefault()}
	<!-- TODO: Filled star here-->
{/snippet}

<div {...api.getRootProps()}>
	{#if !!label}
		<label class="{labelBase} {labelClasses}" {...api.getLabelProps()}>
			{@render label()}
		</label>
	{/if}
	<div class="{base} {classes}" {...api.getControlProps()}>
		{#each api.items as index}
			{@const itemState = api.getItemState({ index })}
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
	<input {...api.getHiddenInputProps()} />
</div>
