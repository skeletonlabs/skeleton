<script lang="ts">
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';
</script>

<TagsInput defaultValue={['Vanilla', 'Chocolate', 'Strawberry']}>
	<header class="flex justify-between items-end">
		<TagsInput.Label>Flavors</TagsInput.Label>
		<TagsInput.ClearTrigger>Clear</TagsInput.ClearTrigger>
	</header>
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
</TagsInput>
