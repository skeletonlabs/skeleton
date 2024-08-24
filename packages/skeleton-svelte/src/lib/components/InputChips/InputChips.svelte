<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { TagsInputProps } from './types.js';
	import { x } from '$lib/internal/snippets.js';

	// Props
	let {
		value = $bindable(),
		base = 'grid input',
		padding = 'p-3',
		gap = 'gap-2',
		classes = '',
		inputBase = 'input-ghost',
		inputClasses = '',
		chipListBase = 'flex gap-1',
		chipListClasses = '',
		chipBase = 'px-2 py-1 rounded',
		chipBackground = 'preset-filled-surface-950-50',
		chipClasses = '',
		editInputBase = 'input-ghost leading-3 ',
		editInputClasses,
		deleteItemButtonBase,
		deleteItemButtonClasses,
		deleteItemButton = x,
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

<!-- Root-->
<div class="{base} {padding} {gap} {classes}" {...api.getRootProps()}>
	<!-- Input -->
	<input class="{inputBase} {inputClasses}" {...api.getInputProps()} />
	{#if api.value.length > 0}
		<!-- Item List -->
		<div class="{chipListBase} {chipListClasses}">
			{#each api.value as value, index (value)}
				{@const itemState = api.getItemState({ index, value })}

				<!-- Item -->
				<span class="{chipBase} {chipBackground} {chipClasses}" {...api.getItemProps({ value, index })}>
					<!-- Edit Preview -->
					<div style:display={itemState.editing ? 'none' : 'block'} {...api.getItemPreviewProps({ index, value })}>
						<span>{value}</span>

						<!-- Delete Item Button -->
						<button class="{deleteItemButtonBase} {deleteItemButtonClasses}" {...api.getItemDeleteTriggerProps({ index, value })}
							>{@render deleteItemButton()}</button
						>
					</div>

					<!-- Edit Input -->
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
