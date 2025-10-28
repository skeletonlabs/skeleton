import { Listbox, useListCollection } from '@/index.js';

export default function Test() {
	const collection = useListCollection({
		items: [{ value: 'item', label: 'Item' }],
	});

	return (
		<Listbox collection={collection} data-testid="root">
			<Listbox.Label data-testid="label" />
			<Listbox.Input data-testid="input" />
			<Listbox.Content data-testid="content">
				<Listbox.ItemGroup data-testid="item-group">
					<Listbox.ItemGroupLabel data-testid="item-group-label" />
					<Listbox.Item item="item" data-testid="item">
						<Listbox.ItemText data-testid="item-text" />
						<Listbox.ItemIndicator data-testid="item-indicator" />
					</Listbox.Item>
				</Listbox.ItemGroup>
			</Listbox.Content>
		</Listbox>
	);
}
