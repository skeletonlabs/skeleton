import { SwitchRootContext } from '../modules/root-context';
import type { useSwitch } from '../modules/use-switch';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
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
		<SwitchRootContext.Provider value={switch_}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</SwitchRootContext.Provider>
	);
}
