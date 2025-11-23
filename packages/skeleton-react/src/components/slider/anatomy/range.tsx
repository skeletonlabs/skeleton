import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderRangeProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Range(props: SliderRangeProps) {
	const slider = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		slider.getRangeProps(),
		{
			className: classesSlider.range,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
