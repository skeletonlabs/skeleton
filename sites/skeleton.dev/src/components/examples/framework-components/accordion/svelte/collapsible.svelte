<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion collapsible>
	{#each ['1', '2', '3'] as item (item)}
		<Accordion.Item value={item}>
			<h3>
				<Accordion.ItemTrigger>Item {item}</Accordion.ItemTrigger>
			</h3>
			<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion>
