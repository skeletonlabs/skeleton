import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
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

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
