import { SliderRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label'> {}

export default function Label(props: SliderLabelProps) {
	const slider = use(SliderRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		slider.getLabelProps(),
		{
			className: classesSlider.label,
		},
		rest,
	);

	return element ? element(attributes) : <label {...attributes}>{children}</label>;
}
