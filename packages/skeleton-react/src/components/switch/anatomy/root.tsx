import { SwitchRootContext } from '../modules/root-context';
import { useSwitch } from '../modules/use-switch';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitProps } from '@zag-js/switch';
import type { Props } from '@zag-js/switch';

export interface SwitchRootProps extends Omit<Props, 'id'>, PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}

export default function Root(props: SwitchRootProps) {
	const [switchProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const switch_ = useSwitch(switchProps);

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
