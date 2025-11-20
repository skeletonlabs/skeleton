import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useListbox } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { type Props, splitProps } from '@zag-js/listbox';
import { mergeProps } from '@zag-js/react';

export interface ListboxRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'onSelect'> {}

export default function Root(props: ListboxRootProps) {
	const [listboxProps, componentProps] = splitProps(props as ListboxRootProps & Pick<Props, 'id'>);
	const { element, children, ...rest } = componentProps;

	const listbox = useListbox(listboxProps);

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
