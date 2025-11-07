import { Listbox, useListCollection } from '@skeletonlabs/skeleton-react';

const data = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Carrot', value: 'carrot' },
	{ label: 'Broccoli', value: 'broccoli' },
	{ label: 'Spinach', value: 'spinach' },
];

export default function DisabledItem() {
	const collection = useListCollection({
		items: data,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
		isItemDisabled: (item) => item.value === 'banana',
	});

	return (
		<Listbox className="w-full max-w-md" collection={collection}>
			<Listbox.Content>
				{collection.items.map((item) => (
					<Listbox.Item key={item.value} item={item}>
						<Listbox.ItemText>{item.label}</Listbox.ItemText>
						<Listbox.ItemIndicator />
					</Listbox.Item>
				))}
			</Listbox.Content>
		</Listbox>
	);
}
