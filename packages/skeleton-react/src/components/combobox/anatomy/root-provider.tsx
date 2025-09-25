import { ComboboxRootContext } from '../modules/root-context';
import { useCombobox } from '../modules/use-combobox';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
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
