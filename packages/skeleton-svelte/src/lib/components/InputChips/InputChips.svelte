<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { TagsInputProps } from './types.js';

	// Props
	let {
		value = $bindable(),
		base = 'grid input',
		padding = 'p-3',
		gap = 'gap-2',
		inputBase = 'input-ghost',
		inputClasses = '',
		chipListBase = 'flex gap-1',
		chipListClasses = '',
		chipBase = 'px-2 py-1 rounded',
		chipBackground = 'preset-filled-surface-950-50',
		chipClasses = '',
		editInputBase = 'input-ghost leading-3 ',
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

<div class="{base} {padding} {gap} {classes}" {...api.getRootProps()}>
	<input class="{inputBase} {inputClasses}" {...api.getInputProps()} />
	{#if api.value.length > 0}
		<div class="{chipListBase} {chipListClasses}">
			{#each api.value as value, index (value)}
				{@const itemState = api.getItemState({ index, value })}
				<span class="{chipBase} {chipBackground} {chipClasses}" {...api.getItemProps({ value, index })}>
					<div style:display={itemState.editing ? 'none' : 'block'} {...api.getItemPreviewProps({ index, value })}>
						<span>{value}</span>

						<button {...api.getItemDeleteTriggerProps({ index, value })}>&#x2715;</button>
					</div>
					<input
						class="{editInputBase} {editInputClasses}"
						style:display={itemState.editing ? 'inline-block' : 'none'}
						{...api.getItemInputProps({ index, value })}
					/>
				</span>
			{/each}
		</div>
	{/if}
</div>
