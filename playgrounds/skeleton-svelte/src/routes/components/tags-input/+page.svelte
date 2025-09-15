<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';
</script>

<TagsInput>
	<TagsInput.Label>Label</TagsInput.Label>
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
		<TagsInput.Input placeholder="Enter value..." class="w-full" />
	</TagsInput.Control>
	<TagsInput.ClearTrigger>Clear All</TagsInput.ClearTrigger>
	<TagsInput.HiddenInput />
</TagsInput>
