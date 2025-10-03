<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion>
	<Accordion.Item value="item-1">
		<h3>
			<Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content 1</Accordion.ItemContent>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<h3>
			<Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content 2</Accordion.ItemContent>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<h3>
			<Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content 3</Accordion.ItemContent>
	</Accordion.Item>
</Accordion>
