import { mergeProps } from '@zag-js/react';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { splitProps, type Props } from '@zag-js/switch';
import { SwitchRootContext } from '../modules/root-context';
import { useSwitch } from '../modules/use-switch';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface SwitchRootProps extends Omit<Props, 'id'>, PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}

export default function (props: SwitchRootProps) {
	const [switchProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const switch_ = useSwitch(switchProps);

	const attributes = mergeProps(switch_.getRootProps(), rest, {
		className: classesSwitch.root
	});

	return (
		<SwitchRootContext.Provider value={switch_}>
			{element ? element(attributes) : <label {...attributes}>{children}</label>}
		</SwitchRootContext.Provider>
	);
}
