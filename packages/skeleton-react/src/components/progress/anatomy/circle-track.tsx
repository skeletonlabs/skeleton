import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgress } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircleTrackProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}

export default function CircleTrack(props: ProgressCircleTrackProps) {
	const progress = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		progress.getCircleTrackProps(),
		{
			className: classesProgress.circleTrack,
		},
		rest,
	);

	return element ? element(attributes) : <circle {...attributes} />;
}
