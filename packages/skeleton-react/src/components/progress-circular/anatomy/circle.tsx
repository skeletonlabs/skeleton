import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircularCircleProps extends PropsWithElement<'svg'>, HTMLAttributes<'svg'> {}

export default function Circle(props: ProgressCircularCircleProps) {
	const progressCircular = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progressCircular.getCircleProps(),
		{
			className: classesProgressCircular.circle,
		},
		rest,
	);

	return element ? element(attributes) : <svg {...attributes}>{children}</svg>;
}
