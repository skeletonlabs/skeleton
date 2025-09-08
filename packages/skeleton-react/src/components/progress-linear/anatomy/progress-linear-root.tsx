import { useId, type ComponentProps } from 'react';
// Zag
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import type { Props } from '@zag-js/progress';
import { splitProps, machine, connect } from '@zag-js/progress';
// Internal
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
// Local
import { ProgressLinearRootContext } from '../modules/progress-linear-root-context';

export interface ProgressLinearRootProps
	extends PropsWithElement,
		Omit<Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'dir' | 'defaultValue'> {}

export default function (props: ProgressLinearRootProps) {
	// Props
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;

	// Zag
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);

	// Attributes
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: classesProgressLinear.root
		},
		restAttributes
	);

	return (
		<ProgressLinearRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</ProgressLinearRootContext.Provider>
	);
}
