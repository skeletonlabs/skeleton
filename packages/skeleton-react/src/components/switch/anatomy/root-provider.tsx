import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { SwitchRootContext } from '../modules/root-context';
import type { useSwitch } from '../modules/use-switch';

export interface SwitchRootProviderProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {
	value: ReturnType<typeof useSwitch>;
}

export default function SwitchRootProvider(props: SwitchRootProviderProps) {
	const { element, children, value: switch_, ...rest } = props;

	const attributes = mergeProps(switch_.getRootProps(), rest, {
		className: classesSwitch.root,
	});

	return (
		<SwitchRootContext.Provider value={switch_}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</SwitchRootContext.Provider>
	);
}
