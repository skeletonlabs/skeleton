import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircularTrackProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}

export default function Track(props: ProgressCircularTrackProps) {
	const progressCircular = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		progressCircular.getCircleTrackProps(),
		{
			className: classesProgressCircular.track,
		},
		rest,
	);

	return element ? element(attributes) : <circle {...attributes} />;
}
