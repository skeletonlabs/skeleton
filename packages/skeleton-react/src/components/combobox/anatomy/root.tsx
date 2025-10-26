import { useCombobox } from '../modules/provider';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { type Props, splitProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';

export interface ComboboxRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'onSelect'> {}

export default function Root(props: ComboboxRootProps) {
	const [comboboxProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const combobox = useCombobox(comboboxProps);

	const attributes = mergeProps(
		combobox.getRootProps(),
		{
			className: classesCombobox.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={combobox}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
