import { Combobox, Portal, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-react';
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
	const [selectedItems, setSelectedItems] = useState<typeof data>([]);

	const collection = useListCollection({
		items,
		itemToString: (item) => item.label,
		itemToValue: (item) => item.value,
	});

	const onOpenChange = () => {
		setItems(data);
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = (event) => {
		const filtered = data.filter((item) => item.label.toLowerCase().includes(event.inputValue.toLowerCase()));
		setItems(filtered.length > 0 ? filtered : data);
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = (details) => {
		setSelectedItems(details.items as typeof data);
	};

	const removeChip = (value: string) => {
		setSelectedItems((prev) => prev.filter((item) => item.value !== value));
	};

	return (
		<div className="flex flex-col gap-2">
			{selectedItems.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{selectedItems.map((item) => (
						<span key={item.value} className="chip preset-filled">
							{item.label}
							<button
								type="button"
								className="hover:text-error-500 ms-1 cursor-pointer"
								aria-label={`Remove ${item.label}`}
								onClick={() => removeChip(item.value)}
							>
								✕
							</button>
						</span>
					))}
				</div>
			)}
			<Combobox
				className="max-w-md"
				placeholder="Search..."
				multiple
				collection={collection}
				value={selectedItems.map((i) => i.value)}
				onOpenChange={onOpenChange}
				onInputValueChange={onInputValueChange}
				onValueChange={onValueChange}
			>
				<Combobox.Label>Ingredients</Combobox.Label>
				<Combobox.Control>
					<Combobox.Input />
					<Combobox.Trigger />
				</Combobox.Control>
				<Portal>
					<Combobox.Positioner>
						<Combobox.Content>
							{items.map((item) => (
								<Combobox.Item key={item.value} item={item}>
									<Combobox.ItemText>{item.label}</Combobox.ItemText>
									<Combobox.ItemIndicator />
								</Combobox.Item>
							))}
						</Combobox.Content>
					</Combobox.Positioner>
				</Portal>
			</Combobox>
		</div>
	);
}
