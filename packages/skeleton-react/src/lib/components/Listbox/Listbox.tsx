import { useId, useContext } from 'react';
import { ListboxContext } from './context';
import { getPreviousElement, getNextElement, getFirstElement, getLastElement } from '$lib/internal/elements';
import type { ListboxProps, ListboxContext as ListboxContextType, ListboxItemProps } from './types';

const ListboxRoot = <Value extends string | string[]>({
	name,
	value = '' as Value,
	base = 'grid gap-2 overflow-y-auto',
	gap = 'gap-2',
	overflow = 'overflow-y-auto',
	padding = 'p-2',
	border = 'border border-surface-200-800',
	rounded = 'rounded-container',
	classes,
	onChange,
	children,
	...attributes
}: ListboxProps<Value>) => {
	// Local
	const id = useId();

	// Context
	const ctx: ListboxContextType = {
		id: id,
		name: name,
		select: (v) => {
			Array.isArray(value) ? (value = [...value, v] as Value) : (value = v as Value);
			onChange?.(value);
		},
		deselect: (v) => {
			Array.isArray(value) ? (value = value.filter((_v) => _v !== v) as Value) : (value = '' as Value);
			onChange?.(value);
		},
		isSelected: (v) => (Array.isArray(value) ? value.includes(v) : value === v)
	};

	return (
		<ListboxContext.Provider value={ctx}>
			<div
				{...attributes}
				className={`${base} ${gap} ${overflow} ${padding} ${border} ${rounded} ${classes}`}
				role="listbox"
				aria-orientation="vertical"
				aria-multiselectable={Array.isArray(value)}
				data-skeleton-id={id}
				data-skeleton-part="listbox"
			>
				{children}
			</div>
		</ListboxContext.Provider>
	);
};

const ListboxItem = ({
	value,
	base = 'btn',
	rounded = 'rounded',
	hover = 'hover:preset-tonal',
	focus = 'focus:preset-tonal',
	active = 'aria-selected:preset-filled',
	classes,
	leadBase,
	leadClasses,
	trailBase,
	trailClasses,
	children,
	lead,
	trail,
	...attributes
}: ListboxItemProps) => {
	// Context
	const ctx = useContext(ListboxContext);

	// Local
	const id = useId();
	const listboxItemSelector = `[data-skeleton-id="${ctx.id}"] > [data-skeleton-part="listbox-item"]`;

	// Events
	const onClick: (typeof attributes)['onClick'] = (event) => {
		ctx.isSelected(value) ? ctx.deselect(value) : ctx.select(value);
		attributes.onClick?.(event);
	};
	const onKeyDown: (typeof attributes)['onKeyDown'] = (event) => {
		switch (event.key) {
			case 'ArrowUp': {
				event.preventDefault();
				const previous = getPreviousElement(listboxItemSelector, event.currentTarget);
				previous?.focus();
				break;
			}
			case 'ArrowDown': {
				event.preventDefault();
				const next = getNextElement(listboxItemSelector, event.currentTarget);
				next?.focus();
				break;
			}
			case 'Home': {
				event.preventDefault();
				const first = getFirstElement(listboxItemSelector);
				first?.focus();
				break;
			}
			case 'End': {
				event.preventDefault();
				const last = getLastElement(listboxItemSelector);
				last?.focus();
				break;
			}
		}
		attributes.onKeyDown?.(event);
	};

	return (
		<>
			<button
				{...attributes}
				className={`${base} ${rounded} ${hover} ${focus} ${active} ${classes}`}
				type="button"
				role="option"
				aria-selected={ctx.isSelected(value)}
				data-skeleton-id={id}
				data-skeleton-part="listbox-item"
				onClick={onClick}
				onKeyDown={onKeyDown}
			>
				{lead && <div className={`${leadBase} ${leadClasses}`}>{lead}</div>}
				{children}
				{trail && <div className={`${trailBase} ${trailClasses}`}>{trail}</div>}
			</button>

			{ctx.isSelected(value) && <input type="hidden" name={ctx.name} value={value} />}
		</>
	);
};

export const Listbox = Object.assign(ListboxRoot, {
	Item: ListboxItem
});
