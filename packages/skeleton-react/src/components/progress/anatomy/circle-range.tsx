import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesProgress } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircleRangeProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}

export default function CircleRange(props: ProgressCircleRangeProps) {
	const progress = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		progress.getCircleRangeProps(),
		{
			className: classesProgress.circleRange,
			strokeLinecap: 'round',
		},
		rest,
	);

	return element ? element(attributes) : <circle {...attributes} />;
}
