import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgress } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircleProps extends PropsWithElement<'svg'>, HTMLAttributes<'svg'> {}

export default function Circle(props: ProgressCircleProps) {
	const progress = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progress.getCircleProps(),
		{
			className: classesProgress.circle,
		},
		rest,
	);

	return element ? element(attributes) : <svg {...attributes}>{children}</svg>;
}
