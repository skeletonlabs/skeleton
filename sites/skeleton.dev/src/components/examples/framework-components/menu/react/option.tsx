import { Menu, Portal } from '@skeletonlabs/skeleton-react';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';

export default function Option() {
	const [sort, setSort] = useState('');
	const [filters, setFilters] = useState<string[]>([]);

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

	return (
		<Menu closeOnSelect={false}>
			<Menu.Trigger className="btn preset-filled">Open Menu</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{sortOptions.map((item) => (
							<Menu.OptionItem
								key={item.value}
								type="radio"
								checked={sort === item.value}
								onCheckedChange={(checked) => setSort(checked ? item.value : '')}
								value={item.value}
							>
								<Menu.ItemText>{item.label}</Menu.ItemText>
								<Menu.ItemIndicator className="hidden data-[state=checked]:block">
									<CheckIcon className="size-4" />
								</Menu.ItemIndicator>
							</Menu.OptionItem>
						))}
						<Menu.Separator />
						{filterOptions.map((item) => (
							<Menu.OptionItem
								key={item.value}
								type="checkbox"
								checked={filters.includes(item.value)}
								onCheckedChange={(checked) =>
									setFilters((prev) => (checked ? [...prev, item.value] : prev.filter((x) => x !== item.value)))
								}
								value={item.value}
							>
								<Menu.ItemText>{item.label}</Menu.ItemText>
								<Menu.ItemIndicator className="hidden data-[state=checked]:block">
									<CheckIcon className="size-4" />
								</Menu.ItemIndicator>
							</Menu.OptionItem>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
