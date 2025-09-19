import { Combobox, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-react';
import Fuse from 'fuse.js';
import { useState } from 'react';

const data = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Carrot', value: 'carrot' },
	{ label: 'Broccoli', value: 'broccoli' },
	{ label: 'Spinach', value: 'spinach' },
];

const fuse = new Fuse(data, {
	keys: ['label', 'value'],
	threshold: 0.3,
});

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
		const results = fuse.search(event.inputValue);
		if (results.length > 0) {
			setItems(results.map((result) => result.item));
		} else {
			setItems(data);
		}
	};

	return (
		<div className="w-full max-w-md">
			<Combobox placeholder="Search..." collection={collection} onOpenChange={onOpenChange} onInputValueChange={onInputValueChange}>
				<Combobox.Control>
					<Combobox.Input />
					<Combobox.Trigger />
				</Combobox.Control>
				<Combobox.Positioner className="z-[1]!">
					<Combobox.Content>
						{items.map((item) => (
							<Combobox.Item key={item.value} item={item}>
								<Combobox.ItemText>{item.label}</Combobox.ItemText>
								<Combobox.ItemIndicator />
							</Combobox.Item>
						))}
					</Combobox.Content>
				</Combobox.Positioner>
			</Combobox>
		</div>
	);
}
