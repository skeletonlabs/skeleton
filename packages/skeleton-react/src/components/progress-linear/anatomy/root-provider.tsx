import { ProgressLinearRootContext } from '../modules/root-context';
import type { useProgressLinear } from '../modules/use-progress-linear';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface ProgressLinearRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useProgressLinear>;
}

export default function RootProvider(props: ProgressLinearRootProviderProps) {
	const { element, children, value: progressLinear, ...rest } = props;

	const attributes = mergeProps(
		progressLinear.getRootProps(),
		{
			className: classesProgressLinear.root,
		},
		rest,
	);

	return (
		<ProgressLinearRootContext.Provider value={progressLinear}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ProgressLinearRootContext.Provider>
	);
}
