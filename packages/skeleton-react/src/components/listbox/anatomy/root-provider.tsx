import { useListbox } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface ListboxRootProviderProps
	extends PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'onSelect'> {
	value: ReturnType<typeof useListbox>;
}

export default function RootProvider(props: ListboxRootProviderProps) {
	const { element, children, value: listbox, ...rest } = props;

	const attributes = mergeProps(
		listbox.getRootProps(),
		{
			className: classesListbox.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={listbox}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
