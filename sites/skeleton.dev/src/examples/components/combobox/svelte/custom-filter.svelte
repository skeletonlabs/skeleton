<script lang="ts">
	import { Combobox, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-svelte';
	import Fuse from 'fuse.js';

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

	let items = $state(data);

	const collection = $derived(
		useListCollection({
			items: items,
			itemToString: (item) => item.label,
			itemToValue: (item) => item.value,
		}),
	);

	const onOpenChange = () => {
		items = data;
	};

	const onInputValueChange: ComboboxRootProps['onInputValueChange'] = (event) => {
		const results = fuse.search(event.inputValue);
		if (results.length > 0) {
			items = results.map((result) => result.item);
		} else {
			items = data;
		}
	};
</script>

<Combobox class="w-full max-w-md" placeholder="Search..." {collection} {onOpenChange} {onInputValueChange}>
	<Combobox.Control>
		<Combobox.Input />
		<Combobox.Trigger />
	</Combobox.Control>
	<Combobox.Positioner class="z-[1]!">
		<Combobox.Content>
			{#each items as item (item.value)}
				<Combobox.Item {item}>
					<Combobox.ItemText>{item.label}</Combobox.ItemText>
					<Combobox.ItemIndicator />
				</Combobox.Item>
			{/each}
		</Combobox.Content>
	</Combobox.Positioner>
</Combobox>
