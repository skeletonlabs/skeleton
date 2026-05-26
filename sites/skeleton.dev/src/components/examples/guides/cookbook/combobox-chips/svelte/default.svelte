<script lang="ts">
	import { Combobox, Portal, type ComboboxRootProps, useListCollection } from '@skeletonlabs/skeleton-svelte';

	const data = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'Banana', value: 'banana' },
		{ label: 'Orange', value: 'orange' },
		{ label: 'Carrot', value: 'carrot' },
		{ label: 'Broccoli', value: 'broccoli' },
		{ label: 'Spinach', value: 'spinach' },
	];

	let items = $state(data);
	let selectedItems = $state<typeof data>([]);

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
		const filtered = data.filter((item) => item.label.toLowerCase().includes(event.inputValue.toLowerCase()));
		items = filtered.length > 0 ? filtered : data;
	};

	const onValueChange: ComboboxRootProps['onValueChange'] = (details) => {
		selectedItems = details.items as typeof data;
	};

	function removeChip(value: string) {
		selectedItems = selectedItems.filter((item) => item.value !== value);
	}
</script>

<div class="flex flex-col gap-2">
	{#if selectedItems.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each selectedItems as item (item.value)}
				<span class="chip preset-filled">
					{item.label}
					<button
						type="button"
						class="hover:text-error-500 ms-1 cursor-pointer"
						aria-label="Remove {item.label}"
						onclick={() => removeChip(item.value)}
					>
						✕
					</button>
				</span>
			{/each}
		</div>
	{/if}
	<Combobox
		class="max-w-md"
		placeholder="Search..."
		multiple
		{collection}
		value={selectedItems.map((i) => i.value)}
		{onOpenChange}
		{onInputValueChange}
		{onValueChange}
	>
		<Combobox.Label>Ingredients</Combobox.Label>
		<Combobox.Control>
			<Combobox.Input />
			<Combobox.Trigger />
		</Combobox.Control>
		<Portal>
			<Combobox.Positioner>
				<Combobox.Content>
					{#each items as item (item.value)}
						<Combobox.Item {item}>
							<Combobox.ItemText>{item.label}</Combobox.ItemText>
							<Combobox.ItemIndicator />
						</Combobox.Item>
					{/each}
				</Combobox.Content>
			</Combobox.Positioner>
		</Portal>
	</Combobox>
</div>
