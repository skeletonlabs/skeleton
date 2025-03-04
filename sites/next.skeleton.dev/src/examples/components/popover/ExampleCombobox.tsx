// Based On: https://codesandbox.io/p/sandbox/fragrant-water-bsuirj?file=%2Fsrc%2FApp.tsx%3A1%2C1-168%2C2

import { forwardRef, useRef, useState } from 'react';
import {
	autoUpdate,
	size,
	offset,
	flip,
	useId,
	useDismiss,
	useFloating,
	useInteractions,
	useListNavigation,
	useRole,
	FloatingFocusManager,
	FloatingPortal,
} from '@floating-ui/react';

// prettier-ignore
const data = [
	"Alfalfa Sprouts", "Apple", "Apricot", "Artichoke", "Asian Pear", "Asparagus", "Atemoya", "Avocado", "Bamboo Shoots", "Banana", "Bean Sprouts", "Beans", "Beets", "Belgian Endive", "Bell Peppers", "Bitter Melon", "Blackberries", "Blueberries", "Bok Choy", "Boniato", "Boysenberries", "Broccoflower", "Broccoli", "Brussels Sprouts", "Cabbage", "Cactus Pear", "Cantaloupe", "Carambola", "Carrots", "Casaba Melon", "Cauliflower", "Celery", "Chayote", "Cherimoya", "Cherries", "Coconuts", "Collard Greens", "Corn", "Cranberries", "Cucumber", "Dates", "Dried Plums", "Eggplant", "Endive", "Escarole", "Feijoa", "Fennel", "Figs", "Garlic", "Gooseberries", "Grapefruit", "Grapes", "Green Beans", "Green Onions", "Greens", "Guava", "Hominy", "Honeydew Melon", "Horned Melon", "Iceberg Lettuce", "Jerusalem Artichoke", "Jicama", "Kale", "Kiwifruit", "Kohlrabi", "Kumquat", "Leeks", "Lemons", "Lettuce", "Lima Beans", "Limes", "Longan", "Loquat", "Lychee", "Madarins", "Malanga", "Mandarin Oranges", "Mangos", "Mulberries", "Mushrooms", "Napa", "Nectarines", "Okra", "Onion", "Oranges", "Papayas", "Parsnip", "Passion Fruit", "Peaches", "Pears", "Peas", "Peppers", "Persimmons", "Pineapple", "Plantains", "Plums", "Pomegranate", "Potatoes", "Prickly Pear", "Prunes", "Pummelo", "Pumpkin", "Quince", "Radicchio", "Radishes", "Raisins", "Raspberries", "Red Cabbage", "Rhubarb", "Romaine Lettuce", "Rutabaga", "Shallots", "Snow Peas", "Spinach", "Sprouts", "Squash", "Strawberries", "String Beans", "Sweet Potato", "Tangelo", "Tangerines", "Tomatillo", "Tomato", "Turnip", "Ugli Fruit", "Water Chestnuts", "Watercress", "Watermelon", "Waxed Beans", "Yams", "Yellow Squash", "Yuca/Cassava", "Zucchini Squash"
];

interface ItemProps {
	children: React.ReactNode;
	active: boolean;
}

/** Component: Option */
const Item = forwardRef<HTMLDivElement, ItemProps & React.HTMLProps<HTMLDivElement>>(function Item({ children, active, ...rest }, ref) {
	const id = useId();
	return (
		<div
			ref={ref}
			role="option"
			id={id}
			aria-selected={active}
			{...rest}
			style={{ ...rest.style }}
			className="btn hover:preset-tonal w-full cursor-pointer justify-start"
		>
			{children}
		</div>
	);
});

/** Component: Autocomplete */
function AutoComplete() {
	const [open, setOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const listRef = useRef<Array<HTMLElement | null>>([]);

	const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
		whileElementsMounted: autoUpdate,
		open,
		onOpenChange: setOpen,
		middleware: [
			offset(10),
			flip({ padding: 10 }),
			size({
				apply({ rects, availableHeight, elements }) {
					Object.assign(elements.floating.style, {
						width: `${rects.reference.width}px`,
						maxHeight: `${availableHeight}px`,
					});
				},
				padding: 10,
			}),
		],
	});

	const role = useRole(context, { role: 'listbox' });
	const dismiss = useDismiss(context);
	const listNav = useListNavigation(context, {
		listRef,
		activeIndex,
		onNavigate: setActiveIndex,
		virtual: true,
		loop: true,
	});

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNav]);

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		setInputValue(value);

		if (value) {
			setOpen(true);
			setActiveIndex(0);
		} else {
			setOpen(false);
		}
	}

	const items = data.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()));

	return (
		<>
			<input
				{...getReferenceProps({
					ref: refs.setReference,
					onChange,
					value: inputValue,
					placeholder: 'Enter fruit',
					'aria-autocomplete': 'list',
					onKeyDown(event) {
						if (event.key === 'Enter' && activeIndex != null && items[activeIndex]) {
							setInputValue(items[activeIndex]);
							setActiveIndex(null);
							setOpen(false);
						}
					},
				})}
				className="input max-w-[300px]"
			/>
			<FloatingPortal>
				{open && (
					<FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
						<div
							{...getFloatingProps({
								ref: refs.setFloating,
								style: { ...floatingStyles },
							})}
							className="card preset-outlined-surface-200-800 bg-surface-50-950 space-y-1 overflow-y-auto p-2"
						>
							{items.length === 0 && <p className="opacity-60">No Results Found.</p>}
							{items.map((item, index) => (
								<Item
									key={item}
									{...getItemProps({
										key: item,
										ref(node) {
											listRef.current[index] = node;
										},
										onClick() {
											setInputValue(item);
											setOpen(false);
											refs.domReference.current?.focus();
										},
									})}
									active={activeIndex === index}
								>
									{item}
								</Item>
							))}
						</div>
					</FloatingFocusManager>
				)}
			</FloatingPortal>
		</>
	);
}

// Page Interface
export const Page: React.FC = () => {
	return <AutoComplete />;
};
