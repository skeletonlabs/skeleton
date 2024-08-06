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
		children,
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
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg
	>
{/snippet}

{#snippet iconHalfDefault()}
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<defs>
			<clipPath id="half-star-clip">
				<rect x="12" y="0" width="12" height="24" />
			</clipPath>
		</defs>
		<polygon
			points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<polygon
			points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26   
 12 2"
			fill="currentColor"
			clip-path="url(#half-star-clip)"
		/>
	</svg>
{/snippet}

{#snippet iconFullDefault()}{/snippet}

<div {...api.getRootProps()}>
	{#if !!label}
		<label class="{labelBase} {labelClasses}" {...api.getLabelProps()}>
			{@render label()}
		</label>
	{/if}
	<div class="{base} {classes}" {...api.getControlProps()}>
		{#each api.items as index (index)}
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
