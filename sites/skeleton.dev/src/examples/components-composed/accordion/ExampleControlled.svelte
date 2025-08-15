<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte/composed';

	let value = $state(['item-1']);
</script>

<div class="grid gap-2">
	<Accordion {value} onValueChange={(e) => (value = e.value)}>
		<Accordion.Item value="item-1">
			<Accordion.Heading>
				<Accordion.Trigger>Item 1</Accordion.Trigger>
				<Accordion.Content>Content for Item 1</Accordion.Content>
			</Accordion.Heading>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Heading>
				<Accordion.Trigger>Item 2</Accordion.Trigger>
				<Accordion.Content>Content for Item 2</Accordion.Content>
			</Accordion.Heading>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Heading>
				<Accordion.Trigger>Item 3</Accordion.Trigger>
				<Accordion.Content>Content for Item 3</Accordion.Content>
			</Accordion.Heading>
		</Accordion.Item>
	</Accordion>
	<pre class="pre">{JSON.stringify(value)}</pre>

	<button onclick={() => (value = ['item-1'])} class="btn preset-filled"> Reset </button>
</div>
