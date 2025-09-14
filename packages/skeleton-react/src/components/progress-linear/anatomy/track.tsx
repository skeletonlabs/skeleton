import { use } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
import { ProgressLinearRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ProgressLinearTrackProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ProgressLinearTrack(props: ProgressLinearTrackProps) {
	const progressLinear = use(ProgressLinearRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(progressLinear.getTrackProps(), rest, {
		className: classesProgressLinear.track,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
