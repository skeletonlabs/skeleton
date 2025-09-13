import { mergeProps } from '@zag-js/react';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { ComboboxRootContext } from '../modules/root-context';
import { useCombobox } from '../modules/use-combobox';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ComboboxRootProviderProps
	extends PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue' | 'onSelect'> {
	value: ReturnType<typeof useCombobox>;
}

export default function (props: ComboboxRootProviderProps) {
	const { element, children, value: combobox, ...rest } = props;

	const attributes = mergeProps(combobox.getRootProps(), rest, {
		className: classesCombobox.root
	});

	return (
		<ComboboxRootContext.Provider value={combobox}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ComboboxRootContext.Provider>
	);
}
