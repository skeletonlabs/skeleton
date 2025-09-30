import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgress } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressTrackProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Track(props: ProgressTrackProps) {
	const progress = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progress.getTrackProps(),
		{
			className: classesProgress.track,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
