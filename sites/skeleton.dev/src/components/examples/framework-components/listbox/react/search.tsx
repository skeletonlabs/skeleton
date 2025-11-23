import { Listbox, useListCollection } from '@skeletonlabs/skeleton-react';
import { useMemo, useState } from 'react';

const data = [
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Carrot', value: 'carrot' },
	{ label: 'Broccoli', value: 'broccoli' },
	{ label: 'Spinach', value: 'spinach' },
];

export default function Search() {
	const [query, setQuery] = useState('');

	const collection = useMemo(() => {
		const items = data.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
		return useListCollection({ items });
	}, [query]);

	return (
		<Listbox className="w-full max-w-md" collection={collection}>
			<Listbox.Label>Search for Food</Listbox.Label>
			<Listbox.Input placeholder="Type to search..." value={query} onInput={(e) => setQuery(e.currentTarget.value)} />
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
