import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { splitMarkerProps, type MarkerProps } from '@zag-js/slider';
import { use } from 'react';

export interface SliderMarkerProps extends MarkerProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Marker(props: SliderMarkerProps) {
	const slider = use(RootContext);

	const [markerProps, componentProps] = splitMarkerProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		slider.getMarkerProps(markerProps),
		{
			className: classesSlider.marker,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children ?? markerProps.value}</div>;
}
