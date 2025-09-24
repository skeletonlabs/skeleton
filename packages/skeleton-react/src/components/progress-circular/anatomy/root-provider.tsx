import { ProgressCircularRootContext } from '../modules/root-context';
import type { useProgressCircular } from '../modules/use-progress-circular';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface ProgressCircularRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useProgressCircular>;
}

export default function RootProvider(props: ProgressCircularRootProviderProps) {
	const { element, children, value: progressCircular, ...rest } = props;

	const attributes = mergeProps(
		progressCircular.getRootProps(),
		{
			className: classesProgressCircular.root,
		},
		rest,
	);

	return (
		<ProgressCircularRootContext.Provider value={progressCircular}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ProgressCircularRootContext.Provider>
	);
}
