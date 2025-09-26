import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderMarkerGroupProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function MarkerGroup(props: SliderMarkerGroupProps) {
	const slider = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		slider.getMarkerGroupProps(),
		{
			className: classesSlider.markerGroup,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
