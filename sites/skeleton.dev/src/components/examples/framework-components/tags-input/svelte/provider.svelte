<script lang="ts">
	import { TagsInput, useTagsInput } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const tagsInput = useTagsInput({
		id,
		defaultValue: ['Vanilla', 'Chocolate', 'Strawberry'],
	});
</script>

<div class="w-full space-y-4">
	<TagsInput.Provider value={tagsInput}>
		<TagsInput.Control>
			<TagsInput.Context>
				{#snippet children(tagsInput)}
					{#each tagsInput().value as value, index (index)}
						<TagsInput.Item {value} {index}>
							<TagsInput.ItemPreview>
								<TagsInput.ItemText>{value}</TagsInput.ItemText>
								<TagsInput.ItemDeleteTrigger />
							</TagsInput.ItemPreview>
							<TagsInput.ItemInput />
						</TagsInput.Item>
					{/each}
				{/snippet}
			</TagsInput.Context>
			<TagsInput.Input placeholder="Add a flavor..." />
		</TagsInput.Control>
		<TagsInput.HiddenInput />
	</TagsInput.Provider>

	<!-- Programmatic Controls -->
	<div class="card preset-outlined-surface-200-800 flex justify-center items-center py-4">
		<button class="btn preset-filled" onclick={() => tagsInput().clearValue()}>Clear Tags</button>
	</div>
</div>
