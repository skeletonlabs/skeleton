import { ProgressCircularRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressCircularRangeProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}

export default function Range(props: ProgressCircularRangeProps) {
	const progressCircular = use(ProgressCircularRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(progressCircular.getCircleRangeProps(), rest, {
		className: classesProgressCircular.range,
		strokeLinecap: 'round',
	});

	return element ? element(attributes) : <circle {...attributes} />;
}
