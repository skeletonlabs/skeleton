'use client';

import { Listbox, useListCollection } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const collection = useListCollection({
		items: [
			{ value: 'apple', label: 'Apple', type: 'Fruits' },
			{ value: 'banana', label: 'Banana', type: 'Fruits' },
			{ value: 'orange', label: 'Orange', type: 'Fruits' },
			{ value: 'carrot', label: 'Carrot', type: 'Vegetables' },
			{ value: 'broccoli', label: 'Broccoli', type: 'Vegetables' },
			{ value: 'spinach', label: 'Spinach', type: 'Vegetables' },
		],
		groupBy: (item) => item.type,
	});

	return (
		<Listbox collection={collection}>
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
