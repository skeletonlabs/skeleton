import { Combobox, Portal, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';
import { useState } from 'react';

const data = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Carrot', value: 'carrot' },
	{ label: 'Broccoli', value: 'broccoli' },
	{ label: 'Spinach', value: 'spinach' },
];

export default function InputChip() {
	const [value, setValue] = useState<string[]>([]);
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
		if (filtered.length > 0) {
			setItems(filtered);
		} else {
			setItems(data);
		}
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = (event) => {
		setValue(event.value);
	};

	const removeItem = (item: string) => {
		setValue((current) => current.filter((v) => v !== item));
	};

	const labelFor = (v: string) => data.find((d) => d.value === v)?.label ?? v;

	return (
		<div className="grid gap-2 w-full max-w-md">
			<Combobox
				placeholder="Search..."
				collection={collection}
				onOpenChange={onOpenChange}
				onInputValueChange={onInputValueChange}
				multiple={true}
				value={value}
				onValueChange={onValueChange}
			>
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
			{value.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{value.map((item) => (
						<button
							key={item}
							type="button"
							className="chip preset-filled"
							onClick={() => removeItem(item)}
							aria-label={`Remove ${labelFor(item)}`}
						>
							<span>{labelFor(item)}</span>
							<XIcon size={14} />
						</button>
					))}
				</div>
			)}
		</div>
	);
}
