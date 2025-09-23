<script lang="ts">
	import { Combobox, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-svelte';

	const data = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Orange', value: 'orange' },
		{ label: 'Carrot', value: 'carrot' },
		{ label: 'Broccoli', value: 'broccoli' },
		{ label: 'Spinach', value: 'spinach' },
	];

	let value: string[] = $state([]);
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
		const filtered = data.filter((item) => item.value.toLowerCase().includes(event.inputValue.toLowerCase()));
		if (filtered.length > 0) {
			items = filtered;
		} else {
			items = data;
		}
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = (event) => {
		value = event.value;
	};
</script>

<div class="grid gap-2 w-full max-w-md">
	<Combobox placeholder="Search..." {collection} {onOpenChange} {onInputValueChange} {value} {onValueChange} multiple>
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
	<div class="flex flex-wrap gap-2">
		{#each value as item (item)}
			<span class="chip preset-filled">
				{item}
			</span>
		{/each}
	</div>
</div>
