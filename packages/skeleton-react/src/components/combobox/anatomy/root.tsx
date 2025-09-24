import { ComboboxRootContext } from '../modules/root-context';
import { useCombobox } from '../modules/use-combobox';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
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
		<ComboboxRootContext.Provider value={combobox}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ComboboxRootContext.Provider>
	);
}
