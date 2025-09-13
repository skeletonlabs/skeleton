import { mergeProps } from '@zag-js/react';
import { splitProps, type Props } from '@zag-js/progress';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import { useProgressLinear } from '../modules/use-progress-linear';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ProgressLinearRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function (props: ProgressLinearRootProps) {
	const [progressLinearProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const progressLinear = useProgressLinear(progressLinearProps);

	const attributes = mergeProps(progressLinear.getRootProps(), rest, {
		className: classesProgressLinear.root
	});

	return (
		<ProgressLinearRootContext.Provider value={progressLinear}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ProgressLinearRootContext.Provider>
	);
}
