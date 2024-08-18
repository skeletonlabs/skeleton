<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { TagsInputProps } from './types.js';

	// Props
	let {
		value = $bindable(),
		base = 'input',
		inputBase = 'bg-transparent border-transparent focus:border-transparent focus:ring-0',
		inputClasses = '',
		chipContainerBase = 'px-3 py-2 flex gap-1',
		chipContainerClasses = '',
		chipBase = 'preset-filled-surface-950-50 px-2 py-1 rounded',
		chipClasses = '',
		editInputBase = 'p-0 bg-transparent leading-3 border-transparent focus:border-transparent focus:ring-0',
		editInputClasses,
		classes = '',
		...zagProps
	}: TagsInputProps = $props();

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

<div class="{base} {classes}" {...api.getRootProps()}>
	<input class="{inputBase} {inputClasses}" {...api.getInputProps()} />
	{#if api.value.length > 0}
		<div class="{chipContainerBase} {chipContainerClasses}">
			{#each api.value as value, index (value)}
				{@const itemState = api.getItemState({ index, value })}
				<span class="{chipBase} {chipClasses}" {...api.getItemProps({ value, index })}>
					<div style:display={itemState.editing ? 'none' : 'block'} {...api.getItemPreviewProps({ index, value })}>
						<span>{value}</span>

						<button {...api.getItemDeleteTriggerProps({ index, value })}>&#x2715;</button>
					</div>
					<input
						class="{editInputBase} {editInputClasses}"
						style:display={itemState.editing ? 'block' : 'none'}
						{...api.getItemInputProps({ index, value })}
					/>
				</span>
			{/each}
		</div>
	{/if}
</div>
