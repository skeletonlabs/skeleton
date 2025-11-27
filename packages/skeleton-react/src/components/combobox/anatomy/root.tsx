import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useCombobox } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
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
			className: classes.combobox.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={combobox}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
