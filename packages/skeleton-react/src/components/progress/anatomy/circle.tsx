import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
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
			style: {
				['--size' as string]: '100px',
				['--thickness' as string]: '10px',
			},
		},
		rest,
	);

	return element ? element(attributes) : <svg {...attributes}>{children}</svg>;
}
