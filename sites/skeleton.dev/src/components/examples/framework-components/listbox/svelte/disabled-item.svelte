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

	const collection = useListCollection({
		items: data,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
		isItemDisabled: (item) => item.value === 'banana',
	});
</script>

<Listbox class="w-full max-w-md" {collection}>
	<Listbox.Content>
		{#each collection.items as item (item.value)}
			<Listbox.Item {item}>
				<Listbox.ItemText>{item.label}</Listbox.ItemText>
				<Listbox.ItemIndicator />
			</Listbox.Item>
		{/each}
	</Listbox.Content>
</Listbox>
