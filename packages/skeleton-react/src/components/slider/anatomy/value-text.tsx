import { SliderRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesSlider } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface SliderValueTextProps extends PropsWithElement<'output'>, HTMLAttributes<'output'> {}

export default function ValueText(props: SliderValueTextProps) {
	const slider = use(SliderRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(slider.getValueTextProps(), rest, {
		className: classesSlider.valueText,
	});

	return element ? element(attributes) : <output {...attributes}>{children}</output>;
}
