import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlLabelProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Label(props: SegmentedControlLabelProps) {
	const segmentedControl = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		segmentedControl.getLabelProps(),
		{
			className: classesSegmentedControl.label,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
