<script lang="ts">
	import CircleXIcon from '@lucide/svelte/icons/circle-x';
	import { TagsInput } from '@skeletonlabs/skeleton-svelte';
</script>

<TagsInput defaultValue={['Vanilla', 'Chocolate', 'Strawberry']}>
	<TagsInput.Control>
		<TagsInput.Context>
			{#snippet children(tagsInput)}
				{#each tagsInput().value as value, index (index)}
					<TagsInput.Item {value} {index}>
						<TagsInput.ItemPreview>
							<TagsInput.ItemText>{value}</TagsInput.ItemText>
							<TagsInput.ItemDeleteTrigger>
								<CircleXIcon class="size-4" />
							</TagsInput.ItemDeleteTrigger>
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
