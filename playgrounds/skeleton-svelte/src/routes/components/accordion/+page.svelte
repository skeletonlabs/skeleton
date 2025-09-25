<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion>
	<Accordion.Item value="item-1">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content 1</Accordion.ItemContent>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content 2</Accordion.ItemContent>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
		</Accordion.ItemHeading>
		<Accordion.ItemContent>Content 3</Accordion.ItemContent>
	</Accordion.Item>
</Accordion>
