<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { TagsInputProps } from './types.js';

	// Props
	let { value = $bindable(), base, classes, ...zagProps }: TagsInputProps = $props();

	// Machine
	const [snapshot, send] = useMachine(
		tagsInput.machine({
			id: useId(),
			onValueChange: (details) => {
				value = details.value;
			}
		}),
		{
			context: {
				...zagProps,
				get value() {
					return $state.snapshot(value);
				}
			}
		}
	);

	// API
	const api = $derived(tagsInput.connect(snapshot, send, normalizeProps));
</script>

<div class="input" {...api.getRootProps()}>
	<input
		class="bg-transparent border-transparent focus:border-transparent focus:ring-0"
		placeholder="Placeholder..."
		{...api.getInputProps()}
	/>
	{#if api.value.length > 0}
		<div class="px-3 py-2 flex gap-1">
			{#each api.value as value, index}
				{@const itemState = api.getItemState({ index, value })}
				<span class="preset-filled-surface-950-50 px-1 py-0.5 rounded" {...api.getItemProps({ value, index })}>
					<div class="flex items-center gap-1 {itemState.editing ? 'hidden' : ''}" {...api.getItemPreviewProps({ index, value })}>
						<span>{value}</span>
						<button {...api.getItemDeleteTriggerProps({ index, value })}>&#x2715;</button>
					</div>
					<input
						class="p-0 bg-transparent border-transparent focus:border-transparent focus:ring-0 {itemState.editing ? '' : 'hidden'}"
						{...api.getItemInputProps({ index, value })}
					/>
				</span>
			{/each}
		</div>
	{/if}
</div>
