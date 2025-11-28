import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';

export interface SegmentedControlControlProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Control(props: SegmentedControlControlProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		{
			className: classes.segmentedControl.control,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
