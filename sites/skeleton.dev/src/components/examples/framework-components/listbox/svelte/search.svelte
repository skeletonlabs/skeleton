<script lang="ts">
	import { Listbox, useListCollection } from '@skeletonlabs/skeleton-svelte';

	const data = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Orange', value: 'orange' },
		{ label: 'Carrot', value: 'carrot' },
		{ label: 'Broccoli', value: 'broccoli' },
		{ label: 'Spinach', value: 'spinach' },
	];

	let query = $state('');

	const collection = $derived(
		useListCollection({
			items: data.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
			itemToString: (item) => item.label,
			itemToValue: (item) => item.value,
		}),
	);
</script>

<Listbox class="w-full max-w-md" {collection}>
	<Listbox.Label>Label</Listbox.Label>
	<Listbox.Input placeholder="Type to search..." value={query} onchange={(e) => (query = e.currentTarget.value)} />
	<Listbox.Content>
		{#each collection.items as item (item.value)}
			<Listbox.Item {item}>
				<Listbox.ItemText>{item.label}</Listbox.ItemText>
				<Listbox.ItemIndicator />
			</Listbox.Item>
		{/each}
	</Listbox.Content>
</Listbox>
