import { Listbox, useListCollection } from '@skeletonlabs/skeleton-react';

const data = [
	{ label: 'Apple', value: 'apple', type: 'Fruits' },
	{ label: 'Banana', value: 'banana', type: 'Fruits' },
	{ label: 'Orange', value: 'orange', type: 'Fruits' },
	{ label: 'Carrot', value: 'carrot', type: 'Vegetables' },
	{ label: 'Broccoli', value: 'broccoli', type: 'Vegetables' },
	{ label: 'Spinach', value: 'spinach', type: 'Vegetables' },
];

export default function Group() {
	const collection = useListCollection({
		items: data,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
		groupBy: (item) => item.type,
	});

	return (
		<Listbox className="w-full max-w-md" collection={collection}>
			<Listbox.Label>Label</Listbox.Label>
			<Listbox.Content>
				{collection.group().map(([type, items]) => (
					<Listbox.ItemGroup key={type}>
						<Listbox.ItemGroupLabel>{type}</Listbox.ItemGroupLabel>
						{items.map((item) => (
							<Listbox.Item key={item.value} item={item}>
								<Listbox.ItemText>{item.label}</Listbox.ItemText>
								<Listbox.ItemIndicator />
							</Listbox.Item>
						))}
					</Listbox.ItemGroup>
				))}
			</Listbox.Content>
		</Listbox>
	);
}
