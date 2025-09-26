import { useProgressCircular } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/progress';
import type { Props } from '@zag-js/progress';
import { mergeProps } from '@zag-js/react';

export interface ProgressCircularRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: ProgressCircularRootProps) {
	const [progressCircularProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const progressCircular = useProgressCircular(progressCircularProps);

	const attributes = mergeProps(
		progressCircular.getRootProps(),
		{
			className: classesProgressCircular.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={progressCircular}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</RootContext.Provider>
	);
}
