import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderMarkerGroupProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function MarkerGroup(props: SliderMarkerGroupProps) {
	const slider = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		slider.getMarkerGroupProps(),
		{
			className: classes.slider.markerGroup,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
