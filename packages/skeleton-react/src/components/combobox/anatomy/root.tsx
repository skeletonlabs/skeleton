import { mergeProps } from '@zag-js/react';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitProps, type Props } from '@zag-js/combobox';
import { ComboboxRootContext } from '../modules/root-context';
import { useCombobox } from '../modules/use-combobox';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ComboboxRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'onSelect'> {}

export default function (props: ComboboxRootProps) {
	const [comboboxProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const combobox = useCombobox(comboboxProps);

	const attributes = mergeProps(combobox.getRootProps(), rest, {
		className: classesCombobox.root
	});

	return (
		<ComboboxRootContext.Provider value={combobox}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ComboboxRootContext.Provider>
	);
}
