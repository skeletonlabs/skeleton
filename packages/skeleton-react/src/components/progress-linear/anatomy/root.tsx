import { ProgressLinearRootContext } from '../modules/root-context';
import { useProgressLinear } from '../modules/use-progress-linear';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/progress';
import type { Props } from '@zag-js/progress';
import { mergeProps } from '@zag-js/react';

export interface ProgressLinearRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: ProgressLinearRootProps) {
	const [progressLinearProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const progressLinear = useProgressLinear(progressLinearProps);

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
