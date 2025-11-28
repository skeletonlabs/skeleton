import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressTrackProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Track(props: ProgressTrackProps) {
	const progress = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progress.getTrackProps(),
		{
			className: classes.progress.track,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
