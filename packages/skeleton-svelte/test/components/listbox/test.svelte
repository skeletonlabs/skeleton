<script lang="ts">
	import { Listbox, useListCollection } from '../../../src/index.js';

	const collection = $derived(
		useListCollection({
			items: [{ value: 'item', label: 'Item' }],
		}),
	);
</script>

<Listbox {collection} data-testid="root">
	<Listbox.Label data-testid="label" />
	<Listbox.Input data-testid="input" />
	<Listbox.Content data-testid="content">
		<Listbox.ItemGroup data-testid="item-group">
			<Listbox.ItemGroupLabel data-testid="item-group-label" />
			<Listbox.Item item="item" data-testid="item">
				<Listbox.ItemText data-testid="item-text">Item</Listbox.ItemText>
				<Listbox.ItemIndicator data-testid="item-indicator" />
			</Listbox.Item>
		</Listbox.ItemGroup>
	</Listbox.Content>
</Listbox>
