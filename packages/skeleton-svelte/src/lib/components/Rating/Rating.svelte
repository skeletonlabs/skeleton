<script lang="ts">
	import * as rating from '@zag-js/rating-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import { setRatingContext } from './context.js';
	import type { RatingProps } from './types.js';

	// Props
	let { value = $bindable(), base = 'flex gap-1', classes, labelBase, labelClasses, children, label, ...zagProps }: RatingProps = $props();

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

	// Context
	setRatingContext({
		get api() {
			return api;
		}
	});
</script>

<div {...api.getRootProps()}>
	{#if !!label}
		<label class="{labelBase} {labelClasses}" {...api.getLabelProps()}>
			{@render label()}
		</label>
	{/if}
	<div class="{base} {classes}" {...api.getControlProps()}>
		{@render children?.()}
	</div>
	<input {...api.getHiddenInputProps()} />
</div>
