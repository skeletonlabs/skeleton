<script lang="ts">
	import { CheckIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';

	const sortOptions = [
		{ value: 'newest', label: 'Newest' },
		{ value: 'popular', label: 'Most Popular' },
		{ value: 'rating', label: 'Highest Rated' },
	];

	const filterOptions = [
		{ value: 'free-shipping', label: 'Free Shipping' },
		{ value: 'in-stock', label: 'In Stock' },
		{ value: 'on-sale', label: 'On Sale' },
	];

	let sort = $state('newest');
	let filters = $state<string[]>(['free-shipping', 'in-stock']);
</script>

<Menu closeOnSelect={false}>
	<Menu.Trigger class="btn preset-filled">Open Menu</Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				{#each sortOptions as item (item)}
					<Menu.OptionItem
						type="radio"
						checked={sort === item.value}
						onCheckedChange={(checked) => (sort = checked ? item.value : '')}
						value={item.value}
					>
						<Menu.ItemText>{item.label}</Menu.ItemText>
						<Menu.ItemIndicator class="hidden data-[state=checked]:block">
							<CheckIcon class="size-4" />
						</Menu.ItemIndicator>
					</Menu.OptionItem>
				{/each}
				<Menu.Separator />
				{#each filterOptions as item (item)}
					<Menu.OptionItem
						type="checkbox"
						checked={filters.includes(item.value)}
						onCheckedChange={(checked) => (filters = checked ? [...filters, item.value] : filters.filter((x) => x !== item.value))}
						value={item.value}
					>
						<Menu.ItemText>{item.label}</Menu.ItemText>
						<Menu.ItemIndicator class="hidden data-[state=checked]:block">
							<CheckIcon class="size-4" />
						</Menu.ItemIndicator>
					</Menu.OptionItem>
				{/each}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
