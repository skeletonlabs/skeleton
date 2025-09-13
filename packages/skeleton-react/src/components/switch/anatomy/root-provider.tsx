import { mergeProps } from '@zag-js/react';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { SwitchRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { Api } from '@zag-js/switch';

export interface SwitchRootProviderProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {
	value: Api;
}

export default function (props: SwitchRootProviderProps) {
	const { element, children, value: switch_, ...rest } = props;

	const attributes = mergeProps(switch_.getRootProps(), rest, {
		className: classesSwitch.root
	});

	return (
		<SwitchRootContext.Provider value={switch_}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</SwitchRootContext.Provider>
	);
}
