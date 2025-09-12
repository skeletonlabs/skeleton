import { useId } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { splitProps, machine, connect, type Props } from '@zag-js/progress';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ProgressLinearRootProps
	extends PropsWithElement,
		Omit<Props, 'id'>,
		Omit<HTMLAttributes<'div'>, 'id' | 'dir' | 'defaultValue'> {}

export default function (props: ProgressLinearRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;

	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);

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
