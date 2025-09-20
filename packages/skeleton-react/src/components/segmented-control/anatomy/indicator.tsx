import { SegmentedControlRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SegmentedControlIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}

export default function Indicator(props: SegmentedControlIndicatorProps) {
	const segmentedControl = use(SegmentedControlRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(segmentedControl.getIndicatorProps(), rest, {
		className: classesSegmentedControl.indicator,
	});

	return element ? element(attributes) : <div {...attributes} />;
}
