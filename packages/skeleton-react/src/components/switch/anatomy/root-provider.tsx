import type { useSwitch } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface SwitchRootProviderProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {
	value: ReturnType<typeof useSwitch>;
}

export default function RootProvider(props: SwitchRootProviderProps) {
	const { element, children, value: switch_, ...rest } = props;

	const attributes = mergeProps(
		switch_.getRootProps(),
		{
			className: classesSwitch.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={switch_}>{element ? element(attributes) : <label {...attributes}>{children}</label>}</RootContext.Provider>
	);
}
