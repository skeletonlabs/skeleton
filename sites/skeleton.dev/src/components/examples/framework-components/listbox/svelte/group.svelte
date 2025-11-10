<script lang="ts">
	import { Listbox, useListCollection } from '@skeletonlabs/skeleton-svelte';

	const data = [
		{ label: 'Apple', value: 'apple', type: 'Fruits' },
		{ label: 'Banana', value: 'banana', type: 'Fruits' },
		{ label: 'Orange', value: 'orange', type: 'Fruits' },
		{ label: 'Carrot', value: 'carrot', type: 'Vegetables' },
		{ label: 'Broccoli', value: 'broccoli', type: 'Vegetables' },
		{ label: 'Spinach', value: 'spinach', type: 'Vegetables' },
	];

	const collection = useListCollection({
		items: data,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
		groupBy: (item) => item.type,
	});
</script>

<Listbox class="w-full max-w-md" {collection}>
	<Listbox.Content>
		{#each collection.group() as [type, items] (type)}
			<Listbox.ItemGroup>
				<Listbox.ItemGroupLabel>{type}</Listbox.ItemGroupLabel>
				{#each items as item (item.value)}
					<Listbox.Item {item}>
						<Listbox.ItemText>{item.label}</Listbox.ItemText>
						<Listbox.ItemIndicator />
					</Listbox.Item>
				{/each}
			</Listbox.ItemGroup>
		{/each}
	</Listbox.Content>
</Listbox>
