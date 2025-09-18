<script lang="ts">
	import { Combobox, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-svelte';

	const data = [
		{
			label: 'Apple',
			value: 'apple',
			type: 'Fruits',
		},
		{
			label: 'Banana',
			value: 'banana',
			type: 'Fruits',
		},
		{
			label: 'Orange',
			value: 'orange',
			type: 'Fruits',
		},
		{
			label: 'Carrot',
			value: 'carrot',
			type: 'Vegetables',
		},
		{
			label: 'Broccoli',
			value: 'broccoli',
			type: 'Vegetables',
		},
		{
			label: 'Spinach',
			value: 'spinach',
			type: 'Vegetables',
		},
	];

	let items = $state(data);

	const collection = $derived(
		useListCollection({
			items: items,
			itemToString: (item) => item.label,
			itemToValue: (item) => item.value,
			groupBy: (item) => item.type,
		}),
	);

	const onOpenChange = () => {
		items = data;
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = (event) => {
		const filtered = data.filter((item) => item.value.toLowerCase().includes(event.inputValue.toLowerCase()));
		items = filtered.length > 0 ? filtered : data;
	};
</script>

<Combobox {collection} {onOpenChange} {onInputValueChange}>
	<Combobox.Label>Label</Combobox.Label>
	<Combobox.Control>
		<Combobox.Input />
		<Combobox.Trigger />
	</Combobox.Control>
	<Combobox.Positioner>
		<Combobox.Content>
			{#each collection.group() as [type, items] (type)}
				<Combobox.ItemGroup>
					<Combobox.ItemGroupLabel>{type}</Combobox.ItemGroupLabel>
					{#each items as item (item.value)}
						<Combobox.Item {item}>
							{item.label}
						</Combobox.Item>
					{/each}
				</Combobox.ItemGroup>
			{/each}
		</Combobox.Content>
	</Combobox.Positioner>
</Combobox>
