import { Combobox, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

const data = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Carrot', value: 'carrot' },
	{ label: 'Broccoli', value: 'broccoli' },
	{ label: 'Spinach', value: 'spinach' },
];

export default function Default() {
	const [items, setItems] = useState(data);

	const collection = useListCollection({
		items: items,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
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
					{items.map((item) => (
						<Combobox.Item key={item.value} item={item}>
							{item.label}
						</Combobox.Item>
					))}
				</Combobox.Content>
			</Combobox.Positioner>
		</Combobox>
	);
}
