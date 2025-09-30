<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	let value = $state(['item-1']);
</script>

<Accordion {value} onValueChange={(e) => (value = e.value)}>
	<Accordion.Item value="item-1">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
			<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
		</Accordion.ItemHeading>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-2">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
			<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
		</Accordion.ItemHeading>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="item-3">
		<Accordion.ItemHeading>
			<Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
			<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
		</Accordion.ItemHeading>
	</Accordion.Item>
</Accordion>
