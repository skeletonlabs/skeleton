<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { TagsInputProps } from './types.js';

	// Props
	const {
		placeholder = '',
		// Root
		base = 'grid input !h-auto',
		gap = 'gap-2',
		padding = 'p-3',
		classes = '',
		// Input: Add
		inputBase = 'input-ghost',
		inputClasses = '',
		// Tag List
		tagListBase = 'flex flex-wrap gap-1',
		tagListClasses = '',
		// Tag
		tagBase = 'chip',
		tagBackground = 'preset-filled',
		tagClasses = '',
		// Input: Edit
		tagEditInputBase = 'input',
		tagEditInputClasses = '',
		// Delete Button
		buttonDeleteBase = '',
		buttonDeleteClasses = '',
		// State
		stateDisabled = 'disabled',
		// Snippets
		buttonDelete,
		// Zag
		...zagProps
	}: TagsInputProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(tagsInput.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(tagsInput.connect(service, normalizeProps));

	// Reactive
	const rxDisabled = $derived(service.prop('disabled') ? stateDisabled : '');
</script>

<!-- @component Capture a set of values from users via input and suggestions. -->

<div {...api.getRootProps()} class="{base} {padding} {gap} {rxDisabled} {classes}" data-testid="tags">
	<!-- Input -->
	<input {...api.getInputProps()} {placeholder} class="{inputBase} {inputClasses}" data-testid="tags-input-add" />
	<!-- Hidden Input -->
	<input {...api.getHiddenInputProps()} data-testid="tags-input" />
	<!-- Tag List -->
	{#if api.value.length > 0}
		<div class="{tagListBase} {tagListClasses}" data-testid="tags-list">
			{#each api.value as value, index (value)}
				{@const itemState = api.getItemState({ index, value })}
				<!-- Tag -->
				<div {...api.getItemProps({ value, index })} data-testid="tags-tag">
					<!-- Display -->
					<div
						{...api.getItemPreviewProps({ index, value })}
						class="{tagBase} {tagBackground} {tagClasses}"
						style:display={itemState.editing ? 'none' : ''}
						data-testid="tag-display"
					>
						<span>{value}</span>
						<!-- Delete Button -->
						<button
							{...api.getItemDeleteTriggerProps({ index, value })}
							class="{buttonDeleteBase} {buttonDeleteClasses}"
							data-testid="tag-delete"
						>
							{#if buttonDelete}
								{@render buttonDelete()}
							{:else}
								<strong>&times;</strong>
							{/if}
						</button>
					</div>
					<!-- Editing -->
					<input
						{...api.getItemInputProps({ index, value })}
						class="{tagEditInputBase} {tagEditInputClasses}"
						style:display={itemState.editing ? '' : 'none'}
						data-testid="tags-input-edit"
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
