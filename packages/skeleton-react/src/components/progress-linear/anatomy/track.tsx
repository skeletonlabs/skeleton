import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ProgressLinearTrackProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Track(props: ProgressLinearTrackProps) {
	const progressLinear = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		progressLinear.getTrackProps(),
		{
			className: classesProgressLinear.track,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
