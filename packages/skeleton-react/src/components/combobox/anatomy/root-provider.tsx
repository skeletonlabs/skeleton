import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useCombobox } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface ComboboxRootProviderProps
	extends PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'onSelect'> {
	value: ReturnType<typeof useCombobox>;
}

export default function RootProvider(props: ComboboxRootProviderProps) {
	const { element, children, value: combobox, ...rest } = props;

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
