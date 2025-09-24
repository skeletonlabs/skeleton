import { SliderRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import type { MarkerProps } from '@zag-js/slider';
import { use } from 'react';

export interface SliderMarkerProps extends MarkerProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Marker(props: SliderMarkerProps) {
	const slider = use(SliderRootContext);

	// TODO: Split `markerProps` from `props` using the missing `splitMarkerProps` function: https://github.com/chakra-ui/zag/issues/2725
	const { element, children, value, ...rest } = props;

	const attributes = mergeProps(
		slider.getMarkerProps({ value }),
		{
			className: classesSlider.marker,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children ?? value}</div>;
}
