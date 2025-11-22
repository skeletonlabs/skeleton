import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useSwitch } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
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
		<RootContext.Provider value={switch_}>{element ? element(attributes) : <label {...attributes}>{children}</label>}</RootContext.Provider>
	);
}
