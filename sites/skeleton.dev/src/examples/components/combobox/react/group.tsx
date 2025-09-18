'use client';

import { Combobox, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

const data = [
	{ label: 'Apple', value: 'apple', type: 'Fruits' },
	{ label: 'Banana', value: 'banana', type: 'Fruits' },
	{ label: 'Orange', value: 'orange', type: 'Fruits' },
	{ label: 'Carrot', value: 'carrot', type: 'Vegetables' },
	{ label: 'Broccoli', value: 'broccoli', type: 'Vegetables' },
	{ label: 'Spinach', value: 'spinach', type: 'Vegetables' },
];

export default function Group() {
	const [items, setItems] = useState(data);

	const collection = useListCollection({
		items: items,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
		groupBy: (item) => item.type,
	});

	const onOpenChange = () => {
		setItems(data);
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = (event) => {
		const filtered = data.filter((item) => item.value.toLowerCase().includes(event.inputValue.toLowerCase()));
		setItems(filtered.length > 0 ? filtered : data);
	};

	return (
		<Combobox collection={collection} onOpenChange={onOpenChange} onInputValueChange={onInputValueChange}>
			<Combobox.Label>Label</Combobox.Label>
			<Combobox.Control>
				<Combobox.Input />
				<Combobox.Trigger>Trigger</Combobox.Trigger>
			</Combobox.Control>
			<Combobox.Positioner>
				<Combobox.Content>
					{collection.group().map(([type, items]) => (
						<Combobox.ItemGroup key={type}>
							<Combobox.ItemGroupLabel>{type}</Combobox.ItemGroupLabel>
							{items.map((item) => (
								<Combobox.Item key={item.value} item={item}>
									{item.label}
								</Combobox.Item>
							))}
						</Combobox.ItemGroup>
					))}
				</Combobox.Content>
			</Combobox.Positioner>
		</Combobox>
	);
}
