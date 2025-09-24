import { SliderRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderRangeProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Range(props: SliderRangeProps) {
	const slider = use(SliderRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(slider.getRangeProps(), rest, {
		className: classesSlider.range,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
