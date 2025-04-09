<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte/composed';
</script>

<Accordion>
	<Accordion.Item value="item-1">
		<Accordion.Heading>
			<Accordion.Trigger>
				{#snippet child({ attributes })}
					<button {...attributes}>My Own Button</button>
				{/snippet}
			</Accordion.Trigger>
			<Accordion.Content>Content for Item 1</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<hr class="hr">
	<Accordion.Item value="item-2">
		<Accordion.Heading>
			<Accordion.Trigger>Item 2</Accordion.Trigger>
			<Accordion.Content>Content for Item 2</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
	<hr class="hr">
	<Accordion.Item value="item-3">
		<Accordion.Heading>
			<Accordion.Trigger>Item 3</Accordion.Trigger>
			<Accordion.Content>Content for Item 3</Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
</Accordion>
